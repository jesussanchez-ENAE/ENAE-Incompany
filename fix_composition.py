import re

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# --- 1. Global Centering for Text-heavy, Photo-less slides ---
html = html.replace('#s2, #s2c{ background:#fff; }', '#s2, #s2c{ background:#fff; display: flex; flex-direction: column; justify-content: center; padding-bottom: 60px; }')
html = html.replace('#s4, #s2b{ background:#fff; }', '#s4, #s2b{ background:#fff; display: flex; flex-direction: column; justify-content: center; padding-bottom: 60px; }')

# Fix head padding so it centers properly
html = html.replace('padding:84px 96px 0 96px;', 'padding:0 96px;')

# Fix align items for s4 and s2b body to perfectly center the left text with the right card
html = html.replace('align-items:flex-start;', 'align-items:center;')


# --- 2. Fix Slide 03 (s2b) - Card too small, text too small ---
# The left intro text: 19px -> 26px
html = html.replace('#s4 .left p.intro, #s2b .left p.intro{ font-family:var(--f-body); font-weight:300; font-size:19px; line-height:1.6; color:var(--gris); }', 
                    '#s4 .left p.intro, #s2b .left p.intro{ font-family:var(--f-body); font-weight:300; font-size:24px; line-height:1.5; color:var(--gris); }')

# The inline style for s2b card
html = html.replace('<div class="card" style="width:100%; max-width:300px; padding:40px; margin:0 auto;">', 
                    '<div class="card" style="width:100%; max-width:440px; margin:0 auto;">')

# --- 3. Fix Slide 08 Overflow (s5 and s6b) ---
# Reduce padding and gap
html = html.replace('.area-card{ position:relative; display:flex; align-items:flex-start; gap:26px; background:var(--azul); border-radius:8px; padding:20px 30px; min-height:140px; padding: 30px 40px; }', 
                    '.area-card{ position:relative; display:flex; align-items:flex-start; gap:20px; background:var(--azul); border-radius:12px; padding:16px 30px; min-height:100px; }')

# Fix the duplicate padding problem I accidentally created in previous run:
html = html.replace('.area-card{ position:relative; display:flex; align-items:flex-start; gap:26px; background:var(--azul); border-radius:8px; min-height:140px; padding: 30px 40px; }', 
                    '.area-card{ position:relative; display:flex; align-items:flex-start; gap:20px; background:var(--azul); border-radius:12px; padding:16px 30px; min-height:100px; }')

# If the previous regex created: `.area-card{ position:relative; display:flex; align-items:flex-start; gap:26px; background:var(--azul); border-radius:8px; padding:20px 30px; min-height:140px; padding: 30px 40px; }`
# Let's just do a regex replace to be safe
html = re.sub(r'\.area-card\{[^\}]+\}', '.area-card{ position:relative; display:flex; align-items:flex-start; gap:20px; background:var(--azul); border-radius:12px; padding:18px 30px; min-height:100px; }', html)

# Gap between area cards
html = html.replace('.areas, #s6b .areas{ margin:34px 96px 0 96px; display:flex; flex-direction:column; gap:14px; }', 
                    '.areas, #s6b .areas{ margin:34px 96px 0 96px; display:flex; flex-direction:column; gap:8px; }')

# Reduce font size of area cols slightly to fit better
html = html.replace('font-size:15px; line-height:1.5; margin-bottom:12px;', 'font-size:14px; line-height:1.4; margin-bottom:8px;')
html = html.replace('padding-top:4px; flex-wrap:wrap;', 'padding-top:0px; flex-wrap:wrap; gap:12px 32px;')

# --- 4. Fix Ghost Numbers ---
# Make them act as watermarks, perfectly anchored to bottom right
html = html.replace('.ghost-num{ position:absolute; font-family:var(--f-display); font-weight:900; line-height:.78; color:rgba(169,24,49,.07); pointer-events:none; user-select:none; }',
                    '.ghost-num{ position:absolute; right:40px; bottom:-40px; font-family:var(--f-display); font-weight:900; line-height:.78; color:rgba(169,24,49,.03); pointer-events:none; user-select:none; z-index: 0; }')

# Remove manual offsets from specific slides
html = html.replace('#s2 .ghost-num, #s2c .ghost-num{ font-size:640px; right:-70px; top:-140px; }',
                    '#s2 .ghost-num, #s2c .ghost-num{ font-size:640px; }')
html = html.replace('#s4 .ghost-num, #s2b .ghost-num{ font-size:520px; left:-60px; bottom:-160px; }',
                    '#s4 .ghost-num, #s2b .ghost-num{ font-size:640px; }')


with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
