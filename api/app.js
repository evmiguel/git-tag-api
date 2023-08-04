const express = require('express');
const app = express();

// Middleware setup
app.use(express.json());

// Routes
const gitRoutes = require('./routes/git');
app.use('/tag', gitRoutes);

module.exports = { app };