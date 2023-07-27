from flask import Flask, request
import datetime

app = Flask(__name__)

@app.route('/api/honeypot', methods=['GET', 'POST'])
def honeypot():
    if request.method == 'GET':
        # Log the honeypot data from GET request
        user_ip = request.remote_addr
        timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        log_entry = f"GET Request - IP Address: {user_ip}, Timestamp: {timestamp}"
        with open('honeypot_log.txt', 'a') as file:
            file.write(log_entry + '\n')
        print(log_entry)  # For logging to the terminal

    elif request.method == 'POST':
        # Log the honeypot data from POST request
        data = request.get_json()
        user_ip = data.get('user_ip')
        timestamp = data.get('timestamp')
        log_entry = f"POST Request - IP Address: {user_ip}, Timestamp: {timestamp}"
        with open('honeypot_log.txt', 'a') as file:
            file.write(log_entry + '\n')
        print(log_entry)  # For logging to the terminal

    return '', 200  # Respond with 200 OK

if __name__ == '__main__':
    # Listen on all available network interfaces on port 8000
    app.run(host='0.0.0.0', port=8000)
