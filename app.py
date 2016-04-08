from flask import Flask
from flask import render_template
from flask import request
app = Flask(__name__)

@app.route("/", methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        sentence = request.form['sentence']
        j = 1
        for i, c in enumerate(sentence):
            if not sentence[i].isalpha():
                continue
            if j%5==0 and sentence[i].isalpha():
                sentence = sentence[:i] + sentence[i].swapcase() + sentence[i+1:]
            j+=1
        return render_template('index.html', sentence=sentence)
    else:
        return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)