from flask import Flask, jasonify, request


from flask_cors import CORS

app = Flask(__name__)

@app.route('/api/login', methods=['POST'])

def login_user():
    user_info = request.json
    
    return jasonify({"status": "success", "message": "User authenticated successfully"})

@app.route('/api/financial_advice', methods=['GET'])
def getFinancialAdvice():
    return jasonify({"advice": "Based on your spending habits, consider saving 10% more each month."})

if __name__ == '__main__':
    app.run(debug=True)
