import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extract data from the request body
    const { user_ip, timestamp } = req.body;

    // Log the honeypot data
    const log_entry = `IP Address: ${user_ip}, Timestamp: ${timestamp}`;
    try {
      // Log the honeypot data to the server console
      console.log(log_entry);

      // Write the honeypot data to a log file
      // Replace 'honeypot_log.txt' with your desired log file name
      const fs = require('fs');
      fs.appendFileSync('honeypot_log.txt', log_entry + '\n');

      res.status(200).end();
    } catch (error) {
      console.error('Error logging honeypot data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
}
