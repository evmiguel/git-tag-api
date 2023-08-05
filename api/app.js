const express = require('express');
var cors = require('cors')
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Routes
const gitRoutes = require('./routes/git');
app.use('/tag', gitRoutes);

module.exports = { app };