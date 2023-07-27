import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectPassword, setIncorrectPassword] = useState(false); // State variable for incorrect password

  useEffect(() => {
    const fetchHoneypotData = async () => {
      try {
        // Fetch the honeypot data when the Login page is accessed
        await axios.get('/api/honeypot/login');
      } catch (error) {
        console.error('Error fetching honeypot data:', error);
      }
    };

    fetchHoneypotData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate incorrect password by displaying the message
    setIncorrectPassword(true);

    // Log the user's IP address to the console
    axios.get('https://api.ipify.org?format=json')
      .then((response) => {
        console.log('User IP Address:', response.data.ip);
      })
      .catch((error) => {
        console.error('Error fetching user IP address:', error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-64 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Display the "Incorrect password" message if incorrectPassword is true */}
        {incorrectPassword && (
          <div className="text-red-600 mb-4">Incorrect password</div>
        )}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;