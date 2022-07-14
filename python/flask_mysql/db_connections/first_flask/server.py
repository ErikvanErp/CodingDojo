from flask import Flask, render_template, request, redirect

from friend import Friend

app = Flask(__name__)

@app.route("/")
def index():
    friends = Friend.get_all()
    for friend in friends:
        print(friend.last_name)
    return render_template("index.html", friends=friends)

@app.route("/create_friend", methods=['POST'])
def create_friend():
    data = {
        "fname" : request.form["fname"],
        "lname" : request.form["lname"]
    }

    Friend.create(data)
    return redirect('/')



if __name__ == "__main__":
    app.run(debug=True, port=5001)

