# Basic Website with Login Page and Honeypot Feature
## Description
This project is a basic website with a login page that includes a honeypot feature to log information about potential attackers or malicious bots attempting to access the login page. The frontend of the website is built using React, while the backend honeypot server is implemented using Flask.
## Technologies

- Frontend:
  - React
  - Axios

- Backend:
  - Flask
  - Flask-CORS

## Features

- Simple login page with email and password fields.
- Honeypot feature to log potential attackers' IP addresses and timestamps.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/NOTJAYANTRAWAT/CYBEROPS.git
```
2. Install dependencies for the frontend:
```bash
cd CYBEROPS
npm install
```
3.Install Flask and its dependencies for the honeypot server:
```bash

pip install flask flask-cors
```
## Usage
Start the Flask server for the honeypot feature:
```bash

cd CYBEROPS/app.py
python app.py
```
The Flask server will run on http://127.0.0.1:8000.

Start the frontend development server:
```bash
cd CYBEROPS/admin
npm run dev
```
The frontend app will run on http://localhost:3000.
