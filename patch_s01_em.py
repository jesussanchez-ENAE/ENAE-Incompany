import re

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Current string might be:
# #s01 h1 em { font-family:var(--f-serif); font-style:italic; font-weight:700; color:var(--granate); }
# or it might have letter-spacing. Let's use a regex to be safe.
html = re.sub(
    r'#s01 h1 em\s*\{[^\}]+\}',
    '#s01 h1 em { font-family:"Open Sans", sans-serif; font-style:italic; font-weight:700; color:var(--granate); }',
    html
)

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
