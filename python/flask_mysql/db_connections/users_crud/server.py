from flask import Flask, render_template, request, redirect

from users import User

app = Flask(__name__)

@app.route("/")
def read():
    return render_template("read.html", users=User.read_all())
    
@app.route("/add_user")
def add_user():
    return render_template("create.html")

@app.route("/create_user", methods=['POST'])
def create_user():
    User.insert(request.form)
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True, port=5001)

