with open('/Users/jesus/Documents/GitHub/ENAE-Incompany/ENAE-Incompany/index.html', 'r', encoding='utf-8') as f:
    html = f.read()
start = html.find('<style>')
end = html.find('</style>')
print(html[start:end][:2500])
