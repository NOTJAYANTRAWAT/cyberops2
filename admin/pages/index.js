import React, { useEffect } from 'react';
import Head from 'next/head';
import Login from './components/login'; // Import the Login component
import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.29.15:8000';

const Home = () => {
  useEffect(() => {
    const fetchHoneypotData = async () => {
      try {
        // Get IP address
        const ipResponse = await axios.get('https://api64.ipify.org?format=json');
        const user_ip = ipResponse.data.ip;
  
        // Get timestamp
        const timestamp = new Date().toISOString();
  
        // Send honeypot data to Flask server
        await axios.post('/api/honeypot', { user_ip, timestamp });
      } catch (error) {
        console.error('Error sending honeypot data:', error);
      }
    };
  
    fetchHoneypotData();
  }, []);
  
  return (
    <div>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <main className='bg-[rgb(36,36,36)]  h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
    z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-blue'>
        <Login />
      </main>
    </div>
  );
};

export default Home;
