from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "very secret"

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    return redirect("/show")	 
    
# adding this method
@app.route("/show")
def show_user():
    print("Showing the User Info From the Form")
    print(request.form)
    return render_template("show.html")
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True, port=5001)

