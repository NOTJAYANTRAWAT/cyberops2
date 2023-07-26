from flask import Flask, request
from flask_cors import CORS
import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/honeypot', methods=['POST'])  # Update the method to 'POST'
def honeypot():
    # Log the honeypot data
    user_ip = request.remote_addr
    timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    log_entry = f"IP Address: {user_ip}, Timestamp: {timestamp}"
    with open('honeypot_log.txt', 'a') as file:
        file.write(log_entry + '\n')
    print(log_entry)  # For logging to the terminal

    return '', 200  # Respond with 200 OK

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000)
