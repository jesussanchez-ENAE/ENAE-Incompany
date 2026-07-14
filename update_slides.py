import re
with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace("Diseñado para departamentos de RRHH y líderes empresariales que no se conforman con sobrevivir", "Diseñado para líderes empresariales y directivos que no se conforman con sobrevivir")

html = html.replace(' / 09<', ' / 11<')

html = re.sub(r'<div class="ghost-num">0([3-9])</div>', lambda m: f'<div class="ghost-num">{int(m.group(1))+2:02d}</div>', html)
html = re.sub(r'>0([3-9]) / 11<', lambda m: f'>{int(m.group(1))+2:02d} / 11<', html)

s2_end = html.find('</section>', html.find('id="s2"')) + len('</section>')

new_slides = """

<!-- ============ SLIDE 3 (NEW) ============ -->
<section class="slide" id="s2b">
  <div class="ghost-num">03</div>
  <div class="head">
    <div class="small-caps">El valor de lo colectivo</div>
    <h2>El poder del<br><em>aprendizaje en equipo</em></h2>
  </div>
  <div class="body">
    <div class="left">
      <p class="intro">Al formarse de manera conjunta, los equipos comparten conocimientos, experiencias y enfoques que fortalecen la colaboración y el compromiso.</p>
      <div class="qa">
        <h4>Multiplica el impacto de la formación</h4>
        <p>El aprendizaje contextualizado y participativo fomenta la cohesión del equipo y acelera la resolución de problemas reales dentro de tu empresa.</p>
      </div>
    </div>
    <div class="right" style="display:flex; justify-content:center; align-items:center;">
      <div class="card" style="width:100%; max-width:300px; padding:40px; margin:0 auto;">
        <div class="stat" style="font-size:3rem; margin-bottom:10px;">Red<br>Interna</div>
        <div class="stat-label">COLABORACIÓN</div>
        <div class="note">Fomentamos un ecosistema de crecimiento orgánico entre los participantes.</div>
      </div>
    </div>
  </div>
  <div class="content-footer">
    <div class="brandmark"><div class="dot"></div>ENAE Business School</div>
    <div class="idx">03 / 11</div>
  </div>
</section>

<!-- ============ SLIDE 4 (NEW) ============ -->
<section class="slide" id="s2c">
  <div class="ghost-num">04</div>
  <div class="head">
    <div class="small-caps">De táctico a estratégico</div>
    <h2>Formación alineada con los<br><em>objetivos del negocio</em></h2>
  </div>
  <div class="items" style="grid-template-columns: repeat(3, 1fr); margin-top: 40px; width:90%;">
    <div class="item">
      <div class="idx">01</div>
      <h3>Cultura Corporativa</h3>
      <p>La formación no es un evento aislado, sino una herramienta para reforzar los valores y procesos críticos de la organización.</p>
    </div>
    <div class="item">
      <div class="idx">02</div>
      <h3>Desarrollo del Talento</h3>
      <p>Ofrecemos itinerarios de crecimiento adaptados a cada perfil, garantizando que tu equipo asuma nuevos retos con éxito.</p>
    </div>
    <div class="item">
      <div class="idx">03</div>
      <h3>Ventaja Competitiva</h3>
      <p>Transformamos la gestión del talento en el motor diferencial para impulsar la competitividad y el futuro de la empresa.</p>
    </div>
  </div>
  <div class="content-footer">
    <div class="brandmark"><div class="dot"></div>ENAE Business School</div>
    <div class="idx">04 / 11</div>
  </div>
</section>"""

html = html[:s2_end] + new_slides + html[s2_end:]

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
