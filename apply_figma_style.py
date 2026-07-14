import re

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Typography Tweaks (Agressive Figma style)
html = html.replace(
    'h2 { font-weight:800; font-size:56px; line-height:1.1; color:var(--negro); letter-spacing:-1px; }',
    'h2 { font-weight:900; font-size:60px; line-height:1.05; color:var(--negro); letter-spacing:-2.5px; }'
)
html = html.replace(
    '#s01 h1 { font-weight:800; font-size:72px; line-height:1.05; letter-spacing:-1.5px; margin-bottom:30px; }',
    '#s01 h1 { font-weight:900; font-size:76px; line-height:1.05; letter-spacing:-3px; margin-bottom:30px; }'
)

# 2. Cover Photo Breakout (S01)
# CSS
html = html.replace(
    '#s01 .photo-bento { position:absolute; right:40px; top:40px; bottom:40px; width:45%; border-radius:32px; overflow:hidden; box-shadow:0 40px 80px rgba(0,0,0,0.5); }',
    '#s01 .photo-bento { position:absolute; right:100px; top:120px; bottom:120px; width:30%; border-radius:32px; background:linear-gradient(135deg, var(--azul), #ffffff); box-shadow:0 40px 80px rgba(0,0,0,0.5); }'
)
html = html.replace(
    '#s01 .photo-bento img { width:100%; height:100%; object-fit:cover; }',
    '#s01 .photo-bento img { position:absolute; bottom:0; left:-25%; width:150%; height:auto; object-fit:contain; filter:drop-shadow(0 -10px 40px rgba(0,0,0,0.25)); }'
)
# HTML
html = html.replace(
    '<img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" alt="Equipo">',
    '<img src="assets/man_presenting.png" alt="Equipo">'
)

# 3. Consecuencias (S03) - Hand Blocks in center
# CSS
css_to_insert_s03 = '\n#s03 .breakout-center { position:absolute; bottom:0; left:50%; transform:translateX(-50%); width:460px; z-index:10; pointer-events:none; filter:drop-shadow(0 20px 50px rgba(0,0,0,0.5)); }\n'
html = html.replace('/* S04: Filosofia */', css_to_insert_s03 + '/* S04: Filosofia */')
# HTML
html_to_insert_s03 = '  <img src="assets/hand_blocks.png" class="breakout-center">\n  <div class="half left">'
html = html.replace('  <div class="half left">', html_to_insert_s03)


# 4. Casos de Exito (S10)
html = html.replace(
    '<img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Testimonio">',
    '<img src="assets/photo_portrait.jpg" alt="Testimonio">'
)

# 5. FUNDAE (S12)
# CSS
html = html.replace(
    '#s12 .fundae-box { display:flex; background:var(--negro); border-radius:32px; overflow:hidden; margin-top:50px; color:#fff; box-shadow:0 30px 60px rgba(0,0,0,.2); }',
    '#s12 .fundae-box { display:flex; background:var(--negro); border-radius:32px; overflow:visible; margin-top:50px; color:#fff; box-shadow:0 30px 60px rgba(0,0,0,.2); }'
)
html = html.replace(
    '#s12 .f-right { width:45%; background:linear-gradient(135deg, var(--granate2), var(--granate)); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:60px; }',
    '#s12 .f-right { position:relative; width:45%; background:linear-gradient(135deg, var(--granate2), var(--granate)); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:60px; border-radius:0 32px 32px 0; }'
)
css_to_insert_s12 = '\n#s12 .f-right img.breakout-hand { position:absolute; bottom:-60px; right:-60px; height:130%; width:auto; z-index:5; filter:drop-shadow(-20px 20px 40px rgba(0,0,0,0.5)); pointer-events:none; }\n#s12 .f-right b, #s12 .f-right span { position:relative; z-index:2; text-shadow:0 10px 30px rgba(0,0,0,0.3); }\n'
html = html.replace('/* S13: Cierre */', css_to_insert_s12 + '/* S13: Cierre */')
# HTML
html_to_insert_s12 = '<div class="f-right">\n      <img src="assets/hand_ok.png" class="breakout-hand">'
html = html.replace('<div class="f-right">', html_to_insert_s12)

# 6. CTA Cierre (S13)
html = html.replace(
    '<img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1920" class="bg-photo" alt="Background">',
    '<img src="assets/duo_workshop.jpg" class="bg-photo" alt="Background">'
)

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
