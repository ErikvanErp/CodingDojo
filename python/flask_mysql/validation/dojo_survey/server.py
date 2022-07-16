from flask_app import app

from flask_app.controllers import surveys_cont

if __name__ == '__main__':
    app.run(debug=True, port=5001)    
