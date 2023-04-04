from bs4 import BeautifulSoup

# Read the HTML file
with open('input.html', 'r') as f:
    html = f.read()

# Parse the HTML using BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

# Extract all the text from the HTML
text = soup.get_text()

# Wrap the text in a single <p> tag
result = f'<p>{text}</p>'

# Write the result to a file
with open('output.html', 'w') as f:
    f.write(result)
ww