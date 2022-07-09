from flask import Flask, request, render_template, redirect, session

app = Flask(__name__)
app.secret_key = "dojo survey WRGBWRGBSR"

@app.route('/')
def index():
    return render_template("index.html")
    
@app.route('/process', methods=['POST'])
def process():
    print(request.form)
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']

    return redirect('/result') 

@app.route('/result')
def result():
    return render_template("result.html")

if __name__ == '__main__':
    app.run(debug=True, port=5001)    
