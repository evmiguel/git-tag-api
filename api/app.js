const express = require('express');
const app = express();

// Middleware setup
app.use(express.json());

// Routes
const gitRoute = require('./routes/git');
app.use('/tag', gitRoute);

module.exports = { app };