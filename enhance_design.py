import re

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# CSS Enhancements for a "Senior Designer" look

# 1. Update variables to add softer grays and better semantic colors
html = html.replace('--azul:#DEE5EC;', '--azul:#F0F4F8; --azul-dark:#D1DCE5;')

# 2. Add subtle shadow and border to item cards
html = html.replace('padding:38px 30px; }', 'padding:40px 32px; border:1px solid rgba(0,0,0,0.03); box-shadow:0 12px 34px rgba(0,0,0,0.04); transition: transform 0.3s ease, box-shadow 0.3s ease; }\n#s2 .item:hover, #s2c .item:hover{ transform: translateY(-4px); box-shadow:0 16px 40px rgba(0,0,0,0.08); }')

# 3. Enhance .icon-badge
html = html.replace('background:var(--azul); color:var(--granate); flex:none; }', 'background:linear-gradient(135deg, var(--azul), #ffffff); color:var(--granate); flex:none; box-shadow: 0 4px 12px rgba(169, 24, 49, 0.08); border: 1px solid rgba(169, 24, 49, 0.1); }')

# 4. Enhance small-caps with a dash
html = html.replace('.small-caps{ font-family:var(--f-body); font-weight:800; font-size:14px; letter-spacing:3px; text-transform:uppercase; color:var(--granate); }', '.small-caps{ font-family:var(--f-body); font-weight:800; font-size:13px; letter-spacing:4px; text-transform:uppercase; color:var(--granate); display: flex; align-items: center; gap: 12px; }\n.small-caps::before { content: ""; display: block; width: 24px; height: 2px; background: var(--granate); }')

# 5. Make the black cards (like in s4 and s2b) more premium
html = html.replace('#s4 .card, #s2b .card{ background:var(--negro); color:#fff; border-radius:8px; padding:52px 44px; position:relative; }', '#s4 .card, #s2b .card{ background:linear-gradient(145deg, var(--negro), #111111); color:#fff; border-radius:16px; padding:56px 48px; position:relative; box-shadow: 0 24px 48px rgba(0,0,0,0.15); border: 1px solid rgba(255,255,255,0.05); }')

# 6. Better gradient on s3 diag-panel
html = html.replace('background:linear-gradient(100deg, var(--negro) 58%, var(--granate2) 58.4%, var(--granate) 100%)', 'background:linear-gradient(100deg, #111 58%, var(--granate2) 58.4%, var(--granate) 100%)')

# 7. Add subtle glassmorphism to .nav
html = html.replace('background:rgba(20,20,20,.72); backdrop-filter:blur(6px);', 'background:rgba(20,20,20,.6); backdrop-filter:blur(16px); border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 8px 32px rgba(0,0,0,0.2);')

# 8. Enhance slide transitions
html = html.replace('transition:opacity .5s ease;', 'transition:opacity .7s cubic-bezier(0.4, 0, 0.2, 1);')

# 9. Improve spacing and typography in step (Slide 3)
html = html.replace('border-bottom:1px solid rgba(255,255,255,.14);', 'border-bottom:1px solid rgba(255,255,255,.08); padding: 32px 0;')

# 10. Buttons/Pills
html = html.replace('.pill.solid{ background:var(--granate); color:#fff; }', '.pill.solid{ background:linear-gradient(135deg, var(--granate), var(--granate2)); color:#fff; box-shadow: 0 8px 24px rgba(169, 24, 49, 0.3); transition: transform 0.3s ease, box-shadow 0.3s ease; border: none; }\n.pill.solid:hover{ transform: translateY(-2px); box-shadow: 0 12px 32px rgba(169, 24, 49, 0.4); }')

# 11. H2 spacing
html = html.replace('line-height:1.05;', 'line-height:1.08; letter-spacing: -0.5px;')
html = html.replace('font-size:56px;', 'font-size:58px;')

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
