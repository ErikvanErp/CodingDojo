from flask_app import app

from flask_app.controllers import root, wall
# import all additional controllers 
# from flask_app.controllers import root

if __name__ == '__main__':
    app.run(debug=True, port=5001)    
