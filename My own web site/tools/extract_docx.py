import zipfile
from pathlib import Path

base = Path(r"C:\Users\angela.pc\OneDrive - Gimnasio Femenino\Documentos\My own web site")
out = base / "_docx_extract"
out.mkdir(exist_ok=True)
files = [
    "Resources for first graders.docx",
    "Resources for second graders.docx",
    "Resources for third graders.docx",
]
for f in files:
    path = base / f
    dest = out / (f.replace('.docx', '.document.xml'))
    if not path.exists():
        print(f"MISSING: {path}")
        continue
    try:
        with zipfile.ZipFile(path, 'r') as z:
            if 'word/document.xml' in z.namelist():
                with z.open('word/document.xml') as entry, open(dest, 'wb') as out_f:
                    out_f.write(entry.read())
                print(f"WROTE: {dest}")
            else:
                print(f"NO_DOCUMENT_XML: {path}")
    except Exception as e:
        print(f"ERROR: {path} -> {e}")
