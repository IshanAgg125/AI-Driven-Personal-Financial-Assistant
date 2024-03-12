from flask import Flask, jsonify
from flask_cors import CORS  # If you're using CORS

app = Flask(__name__)
CORS(app)  # Enable CORS if needed

data = {"message": "Hello from the Python backend!"}

@app.route('/')


def home():
    return "Welcome to the Flask App!"

@app.route('/api/data', methods=['GET'])


def get_data():
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
