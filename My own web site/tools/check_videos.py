import re
import urllib.request
import urllib.error
from pathlib import Path

base = Path(r"c:\Users\angela.pc\OneDrive - Gimnasio Femenino\Documentos\My own web site")
js_path = base / 'js' / 'script.js'
text = js_path.read_text(encoding='utf-8')

# Find resource objects with isVideo: true
pattern = re.compile(r"\{[^}]*?isVideo\s*:\s*true[^}]*?url\s*:\s*['\"]([^'\"]+)['\"][^}]*?\}", re.S)
matches = pattern.findall(text)

# Also search for video entries in second/third grade blocks (t3, s2) if different pattern
# Already caught by above; still search for youtube ids more broadly
all_urls = set(matches)

# Also catch any youtube watch links anywhere
all_urls.update(re.findall(r"https?://[^\s'\"]*youtube[^\s'\"]*", text))
all_urls.update(re.findall(r"https?://youtu\.be/[^\s'\"]*", text))

print(f"Found {len(all_urls)} video URLs\n")

results = []

def get_watch_url(url):
    # return watch?v form if possible
    m = re.search(r"[?&]v=([A-Za-z0-9_-]{6,})", url)
    if m:
        return f"https://www.youtube.com/watch?v={m.group(1)}", m.group(1)
    m = re.search(r"youtu\.be/([A-Za-z0-9_-]{6,})", url)
    if m:
        return f"https://www.youtube.com/watch?v={m.group(1)}", m.group(1)
    m = re.search(r"embed/([A-Za-z0-9_-]{6,})", url)
    if m:
        return f"https://www.youtube.com/watch?v={m.group(1)}", m.group(1)
    return url, None

for u in sorted(all_urls):
    watch, vid = get_watch_url(u)
    info = { 'url': u, 'watch': watch, 'id': vid }
    try:
        req = urllib.request.Request(watch, headers={ 'User-Agent':'Mozilla/5.0' }, method='GET')
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read(200000).decode('utf-8', errors='ignore')
            code = resp.getcode()
            info['http_status'] = code
            # simple heuristics
            lower = html.lower()
            if 'this video is private' in lower or 'video privado' in lower:
                info['status'] = 'private'
            elif 'video unavailable' in lower or 'no disponible' in lower or 'has been removed' in lower or 'was removed' in lower:
                info['status'] = 'unavailable'
            elif 'playback on other websites has been disabled by the video owner' in lower or 'has disabled embedding' in lower or 'playback on other websites' in lower:
                info['status'] = 'embed-blocked'
            else:
                info['status'] = 'ok'
    except urllib.error.HTTPError as e:
        info['http_status'] = e.code
        info['status'] = 'http-error'
    except Exception as e:
        info['http_status'] = None
        info['status'] = f'error: {e}'
    results.append(info)

# Print report
for r in results:
    print(f"ID: {r.get('id') or '-'}")
    print(f"  original: {r['url']}")
    print(f"  watch: {r['watch']}")
    print(f"  http_status: {r.get('http_status')}")
    print(f"  status: {r.get('status')}")
    print()

# Save JSON report
import json
(out := base / '_video_check_report.json').write_text(json.dumps(results, indent=2, ensure_ascii=False))
print(f"Report written to {out}")
