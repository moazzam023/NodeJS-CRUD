const express = require('express');
const fs = require('fs');

const app = express();
const port = 8000;

// Connection
const db = require('./connections');
const { userRoutes } = require('./routes/user');
db.connectDB('mongodb://127.0.0.1:27017/youtube-tutorial');

// Middleware
app.use(express.json()); // Parses JSON in request body
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

// Routes
app.use('/api/users', userRoutes);// app.get('/api/users', (req, res) => {

app.listen(port, () => { console.log('server started') });