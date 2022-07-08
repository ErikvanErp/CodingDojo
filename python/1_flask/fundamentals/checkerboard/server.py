from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def checkerboard1():
    return render_template("index.html", x=8, y=8, 
                width=320, color1="", color2="")

@app.route('/<int:x>')
def checkerboard2(x):
    return render_template("index.html", x=x, y=8, 
                width=320, color1="", color2="")

@app.route('/<int:x>/<int:y>')
def checkerboard3(x, y):
    width = y * 40
    return render_template("index.html", x=x, y=y, 
                width=width, color1="", color2="")

@app.route('/<int:x>/<int:y>/<color1>/<color2>')
def checkerboard4(x, y, color1, color2):
    width = y * 40
    return render_template("index.html", x=x, y=y, 
                width=width, color1=color1, color2=color2)



if __name__ == '__main__':
    app.run(debug=True, port=5001)