# -*- coding: utf-8 -*-
"""
Script to fix corrupted emoji encoding in script.js
"""

# Mapping of corrupted text to correct emojis
emoji_fixes = {
    # Halloween decorations
    '­ƒºÖÔÇìÔÖÇ´©Å': '🧙‍♀️',  # witch
    '­ƒò©´©Å': '🕸️',  # spider web
    '­ƒÄâ': '🎃',  # pumpkin/jack-o-lantern
    '­ƒæ╗': '👻',  # ghost
    
    # General emojis
    '­ƒîƒ': '📚',  # books
    '­ƒÄ»': '📖',  # open book
    '­ƒöó': '✨',  # sparkles
    '­ƒÄ¿': '📝',  # memo/note
    '­ƒôÜ': '🎉',  # party popper
    'Ô£Å´©Å': '✓',  # checkmark
    '­ƒæïÔ£¿': '👩‍🏫',  # woman teacher
    'Ô¡É': '⭐',  # star
    '­ƒÆû': '💖',  # sparkling heart
    '­ƒôû': '📚',  # books
    '­ƒôè': '🎓',  # graduation cap
    '­ƒÄë': '🎯',  # dart/target
    '­ƒÄô': '🎓',  # graduation cap
    '­ƒôª': '📊',  # bar chart
    '­ƒôØ': '📝',  # memo
    '­ƒîê': '🔢',  # numbers
    '­ƒöÀ': '🔷',  # blue diamond
    '­ƒöú': '🔤',  # letters
    '­ƒÜº': '🚀',  # rocket
    '­ƒôÑ': '📥',  # inbox tray
    'ÔÜû´©Å': '➗',  # division sign
    '­ƒæ®ÔÇì­ƒÅ½': '👩‍🏫',  # woman teacher
    
    # Seasonal - New Year
    '­ƒÄè': '🎊',  # confetti ball
    'Ô£¿': '✨',  # sparkles
    '­ƒÄå': '🎆',  # fireworks
    '­ƒÑ│': '🌟',  # glowing star
    '­ƒôà': '🎁',  # gift
    
    # Valentine's Day
    '­ƒÆò': '💕',  # two hearts
    '­ƒÆî': '💗',  # growing heart
    '­ƒî╣': '🌹',  # rose
    'ÔØñ´©Å': '❤️',  # red heart
    
    # Spring
    '­ƒî©': '🌸',  # cherry blossom
    '­ƒî▒': '🌼',  # blossom
    '­ƒî║': '🌺',  # hibiscus
    '­ƒªï': '🦋',  # butterfly
    '­ƒîÀ': '🌷',  # tulip
    
    # Easter
    '­ƒÉ░': '🐰',  # rabbit face
    '­ƒÑÜ': '🥚',  # egg
    '­ƒÉú': '🐣',  # hatching chick
    '­ƒî╝': '🌻',  # sunflower
    
    # May/Mother's Day
    '­ƒî╗': '🌹',  # rose
    
    # Summer
    'ÔÿÇ´©Å': '☀️',  # sun
    '­ƒÅû´©Å': '🏖️',  # beach with umbrella
    '­ƒîè': '🌴',  # palm tree
    '­ƒìë': '🍉',  # watermelon
    '­ƒÅä': '🏊',  # person swimming
    
    # Vacation
    '­ƒÅò´©Å': '✈️',  # airplane
    '­ƒÄ¬': '🎒',  # backpack
    '­ƒÄí': '🎢',  # roller coaster
    '­ƒÄó': '🎪',  # circus tent
    '­ƒÄá': '🎡',  # ferris wheel
    
    # Messages and alerts
    '­ƒÿè': '😊',  # smiling face
    'ÔØñ´©Å': '❤️',  # red heart
    '­ƒôØÔ£¿': '📝✨',  # memo with sparkles
    '­ƒöÆ': '🔒',  # lock
}

def fix_emojis_in_file(filepath):
    """Read file, replace corrupted emojis, and write back."""
    try:
        # Read the file with UTF-8 encoding
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        replacements_made = 0
        
        # Replace each corrupted emoji with the correct one
        for corrupted, correct in emoji_fixes.items():
            if corrupted in content:
                count = content.count(corrupted)
                content = content.replace(corrupted, correct)
                replacements_made += count
                print(f"Replaced '{corrupted}' with '{correct}' ({count} times)")
        
        if replacements_made > 0:
            # Write the corrected content back to the file
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"\n✅ Successfully fixed {replacements_made} emoji instances!")
            print(f"File saved: {filepath}")
        else:
            print("No corrupted emojis found.")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    script_path = "js/script.js"
    print(f"Fixing emojis in {script_path}...")
    print("-" * 50)
    fix_emojis_in_file(script_path)
