import re

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update #s12 .f-right img.breakout-hand
html = html.replace(
    '#s12 .f-right img.breakout-hand { position:absolute; bottom:-60px; right:-60px; height:130%; width:auto; z-index:5; filter:drop-shadow(-20px 20px 40px rgba(0,0,0,0.5)); pointer-events:none; }',
    '#s12 .f-right img.breakout-hand { position:absolute; bottom:-200px; right:-130px; height:130%; width:auto; z-index:5; filter:drop-shadow(-20px 20px 40px rgba(0,0,0,0.5)); pointer-events:none; }'
)

# 2. Update #s03 .breakout-center
html = html.replace(
    '#s03 .breakout-center { position:absolute; bottom:0; left:50%; transform:translateX(-50%); width:460px; z-index:10; pointer-events:none; filter:drop-shadow(0 20px 50px rgba(0,0,0,0.5)); }',
    '#s03 .breakout-center { position:absolute; bottom:0; /* left: 50%; */ transform:translateX(-50%); width:460px; z-index:10; pointer-events:none; filter:drop-shadow(0 20px 50px rgba(0,0,0,0.5)); }'
)

# 3. Update h2 em
html = html.replace(
    'h2 em { font-family:var(--f-serif); font-style:italic; font-weight:700; color:var(--granate); letter-spacing:0; }',
    'h2 em { font-family:"Open Sans", sans-serif; font-style:italic; font-weight:700; color:var(--granate); }'
)
# Just in case the previous state had something else:
html = html.replace(
    'h2 em { font-family:var(--f-serif); font-style:italic; font-weight:700; color:var(--granate); }',
    'h2 em { font-family:"Open Sans", sans-serif; font-style:italic; font-weight:700; color:var(--granate); }'
)

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
