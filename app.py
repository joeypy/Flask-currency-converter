from flask import Flask, render_template
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    url = 'http://www.bcv.org.ve/'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36',
        'Content-Type': 'text/html',
    }
    html_doc = requests.get(url, headers=headers)
    soup = BeautifulSoup(html_doc.text, 'html.parser')
    label, amount = soup.find(id="dolar").stripped_strings
    tasa = float(amount.replace(',', '.'))
    return render_template('index.html', tasa=tasa)


if __name__ == "__main__":
    app.run()


