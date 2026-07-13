import re

with open('index_clean.html', 'r') as f:
    html = f.read()

css_additions = """
/* Premium Tweaks */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.slide.active h1, .slide.active h2, .slide.active .kicker, .slide.active p, .slide.active .pill, .slide.active .item, .slide.active .kpi, .slide.active .card, .slide.active .area-card, .slide.active .client {
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  opacity: 0;
}
.slide.active h1 { animation-delay: 0.1s; }
.slide.active p { animation-delay: 0.3s; }
.slide.active .pill { animation-delay: 0.4s; }
.slide.active .item:nth-child(1) { animation-delay: 0.2s; }
.slide.active .item:nth-child(2) { animation-delay: 0.3s; }
.slide.active .item:nth-child(3) { animation-delay: 0.4s; }
.slide.active .item:nth-child(4) { animation-delay: 0.5s; }
.slide.active .kpi:nth-child(1) { animation-delay: 0.2s; }
.slide.active .kpi:nth-child(2) { animation-delay: 0.3s; }
.slide.active .kpi:nth-child(3) { animation-delay: 0.4s; }
.slide.active .area-card:nth-child(1) { animation-delay: 0.1s; }
.slide.active .area-card:nth-child(2) { animation-delay: 0.2s; }
.slide.active .area-card:nth-child(3) { animation-delay: 0.3s; }
.slide.active .area-card:nth-child(4) { animation-delay: 0.4s; }
.slide.active .client:nth-child(1) { animation-delay: 0.3s; }
.slide.active .client:nth-child(2) { animation-delay: 0.4s; }
.slide.active .client:nth-child(3) { animation-delay: 0.5s; }
.slide.active .client:nth-child(4) { animation-delay: 0.6s; }
.slide.active .deco-lightbulb { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: 0.3s; opacity: 0; }
.slide.active .deco-ok { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: 0.5s; opacity: 0; }

.deco-lightbulb { position: absolute; right: 5%; top: 22%; width: 32%; height: auto; z-index: 0; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.4); object-fit: cover; }
.deco-ok { position: absolute; right: -50px; bottom: -30px; width: 160px; height: auto; z-index: 10; filter: drop-shadow(0 15px 25px rgba(0,0,0,0.5)); transform: rotate(-5deg); }

.item { background: rgba(32, 34, 33, 0.7); border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 10px 30px rgba(0,0,0,0.2); backdrop-filter: blur(10px); border-radius: 12px; transition: transform 0.3s ease; }
.item:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.2); }
.card { box-shadow: 0 20px 50px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px !important; }
.area-card { box-shadow: 0 10px 30px rgba(0,0,0,0.15); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); }

#s2 .items { position: relative; z-index: 2; width: 62%; }
#s2 .head { width: 62%; position: relative; z-index: 2; }

/* Remove clip-slant classes globally */
.clip-slant-r, .clip-slant-l { clip-path: none !important; }
"""

html = html.replace('</style>', css_additions + '\n</style>')

# Replace images
# Slide 1
html = html.replace('<div class="photo clip-slant-r"><img src=""/></div>', '<div class="photo"><img src="assets/man_presenting.png"/></div>', 1)
html = html.replace('<img class="logo-h" src=""/>', '<img class="logo-h" src="assets/enae_horizontal_white.png"/>', 1)

# Slide 2 (Insert lightbulb)
html = html.replace('<section class="slide" id="s2">', '<section class="slide" id="s2">\n  <img src="assets/hand_lightbulb.png" class="deco-lightbulb" />', 1)

# Slide 4 (Insert OK hand inside .card)
# Find the end of .card. Actually, better to insert just before <div class="card"> closes.
html = re.sub(r'(<div class="card">.*?)(</div>\s*</div>\s*<div class="content-footer">)', r'\1<img src="assets/hand_ok.png" class="deco-ok"/>\2', html, flags=re.DOTALL)

# Slide 6
html = html.replace('<div class="photo clip-slant-l"><img src=""/></div>', '<div class="photo"><img src="assets/hand_blocks.png"/></div>', 1)

# Slide 7
html = html.replace('<div class="photo clip-slant-r"><img src=""/></div>', '<div class="photo"><img src="assets/audience.jpg"/></div>', 1)

# Slide 8 (Wait, Slide 8 is #s7 and Slide 9 is #s8)
# In #s8, replace the logo
html = html.replace('<section class="slide" id="s8">\n  <div class="block"></div>\n  <div class="block2"></div>\n  <div class="center">\n    <img src=""/>', '<section class="slide" id="s8">\n  <div class="block"></div>\n  <div class="block2"></div>\n  <div class="center">\n    <img src="assets/enae_white.png"/>', 1)

with open('index_premium.html', 'w') as f:
    f.write(html)
