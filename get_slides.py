import re

with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# find all slide ids
slides = re.findall(r'<section class="slide" id="(.*?)">', html)
print(slides)
