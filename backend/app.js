const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000; // Choose a port for your backend server

// Database connection details
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

// Test the database connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database!');
  }
});

// API endpoint to test the database connection
app.get('/api/test-connection', (req, res) => {
  if (connection.state === 'authenticated') {
    res.json({ message: 'Database connection successful!' });
  } else {
    res.status(500).json({ error: 'Database connection failed.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});