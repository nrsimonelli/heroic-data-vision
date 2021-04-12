const express = require('express');
require('dotenv').config();
const app = express();

// Route includes
const heroRouter = require('./routes/hero.router');
const superRouter = require('./routes/super.router');

// Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', heroRouter);
app.use('/api/super', superRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
