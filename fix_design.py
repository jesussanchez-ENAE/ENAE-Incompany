import re

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Typography
html = html.replace(
    '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600;1,700&display=swap" rel="stylesheet">',
    '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600;1,700&family=Inter:wght@300;400;700;800&display=swap" rel="stylesheet">'
)
html = html.replace("--f-body:'OpenSans',Arial,sans-serif;", "--f-body:'Inter',system-ui,sans-serif;")
html = html.replace("--f-display:'SFUIDisplay','Arial Black',sans-serif;", "--f-display:'SFUIDisplay',system-ui,-apple-system,'Arial Black',sans-serif;")

# 2. Modernize Layout (Remove slant, use Bento)
# Remove seam from HTML
html = html.replace('<div class="seam"></div>', '')

# S1 Photo
html = html.replace(
    '#s1 .photo{ position:absolute; top:0; right:0; width:60%; height:100%; }',
    '#s1 .photo{ position:absolute; top:40px; right:40px; bottom:40px; width:50%; border-radius:32px; overflow:hidden; box-shadow:0 30px 80px rgba(0,0,0,.5); }'
)
# S6 Photo
html = html.replace(
    '#s6 .photo{ position:absolute; top:0; left:0; width:46%; height:100%; }',
    '#s6 .photo{ position:absolute; top:40px; left:40px; bottom:40px; width:40%; border-radius:32px; overflow:hidden; box-shadow:0 30px 60px rgba(0,0,0,.15); }'
)
html = html.replace(
    '#s6 .right{ position:absolute; right:0; top:0; width:54%; height:100%; padding:100px 96px 0 90px; }',
    '#s6 .right{ position:absolute; right:0; top:0; width:54%; height:100%; padding:100px 96px 0 40px; }'
)
# S7 Photo
html = html.replace(
    '#s7 .photo{ position:absolute; right:0; top:0; width:34%; height:100%; }',
    '#s7 .photo{ position:absolute; top:40px; right:40px; bottom:40px; width:34%; border-radius:32px; overflow:hidden; box-shadow:0 30px 60px rgba(0,0,0,.15); }'
)

# 3. Areas (Slide 5 & 6b)
html = html.replace(
    'font-size:10.3px; line-height:14px;',
    'font-size:15px; line-height:1.5; margin-bottom:12px;'
)
html = html.replace(
    '.area-card .cols{ display:flex; gap:24px; flex:1; padding-top:4px; }',
    '.area-card .cols{ display:flex; gap:32px; flex:1; padding-top:4px; flex-wrap:wrap; }'
)
html = html.replace(
    '.area-card .col div::before{ content:\'—\'; position:absolute; left:0; top:0; color:var(--granate); font-size:9px; }',
    '.area-card .col div::before{ content:\'—\'; position:absolute; left:0; top:0; color:var(--granate); font-size:14px; font-weight:bold; }'
)
html = html.replace(
    'min-height:118px;',
    'min-height:140px; padding: 30px 40px;'
)

# Clean up CSS for clip-slant just in case
html = re.sub(r'\.clip-slant-[rl]\{[^\}]+\}', '', html)

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
