from flask import Flask, jsonify, request
from flask_cors import CORS  # If you're using CORS
import sqlite3


app = Flask(__name__)


@app.route('/message', methods=['GET', 'POST'])


# @app.route('/data', methods=['GET', 'POST'])
#@app.route('/api/moreData', methods=['GET'])


# def get_data():
    # data = {"message": "Hello from the Python backend!"}
    # return jsonify(data)


def get_data():
    if request.method == "GET":
        return {"message": ["Member 1", "Member2", "Member3"]}
        #return {"message": "Member1, Member2, Member3"}

    elif request.method == "POST":
        name = request.json.get('name')
        print("name is:", name)
        return jsonify({"message": "Received", "name": name}), 200

if __name__ == '__main__':
    app.run(debug=True)
    

