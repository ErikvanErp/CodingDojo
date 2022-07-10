from flask import Flask, request, render_template, redirect, session
from random import randint


app = Flask(__name__)
app.secret_key = "number game jhhd01837yfb"

@app.route('/')
def index():
    if 'secret_number' not in session:
        session['secret_number'] = randint(1,100)

    return render_template("index.html")
    
@app.route('/guess', methods=['POST'])
def guess():
    print(request.form)
    
    # make sure the guess is an integer 
    if request.form['guess'].strip() == "":
            return redirect('/')

    for x in request.form['guess'].strip():
        if x not in "0123456789":
            return redirect('/')

    session['guess'] = int(request.form['guess'])
    
    # session['guess']:
    # 0 = correct; +1 = too hight; -1 = too low
    if session['guess'] == session['secret_number']:
        session['result'] = 0
    elif session['guess'] > session['secret_number']:
        session['result'] = 1
    else:
        session['result'] = -1
   
    return redirect('/')

@app.route('/newgame')
def newgame():
    session.clear()
    return redirect('/')



if __name__ == '__main__':
    app.run(debug=True, port=5001)    
