from flask import Flask, render_template  
app = Flask(__name__)   

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    # return 'Hello World!'  
    return render_template("index.html")

@app.route('/success')
def success():
  return "success"
    
@app.route('/hello/<name>') # for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'
def hello(name):
    print(name)
    return "Hello, " + name

@app.route('/users/<username>/<id>') # for a route '/users/____/____', two parameters in the url get passed as username and id
def show_user_profile(username, id):
    print(username)
    print(id)
    return "username: " + username + ", id: " + id

# app.run(debug=True) should be the very last statement! 
if __name__=="__main__":   
    app.run(debug=True, port=5001)    

# port 5000 is not available in Monterey