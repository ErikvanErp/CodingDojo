from flask import Flask 
app = Flask(__name__)    

@app.route('/')         
def hello_world():
    return 'Hello World!' 

@app.route('/dojo')
def dojo():
  return "Dojo!"
    
@app.route('/say/<name>') 
def say(name):
    # if isinstance(name, str):    --- no need: name is always an integer, by default
    return f"Hi {name}"

@app.route('/repeat/<int:number>/<string>') 
def repeat(number, string):
    return f"{str(string)}" * number


# for any other path, give an error message
@app.route('/<path:pathname>')
def invalid_path(pathname):
    return f"Invalid path: {pathname}"


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port=5001)    # Run the app in debug mode.

# port 5000 is not available in Monterey
