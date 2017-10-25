const express = require('express');
const mongoose = require('mongoose'); // is used for easier work with mongoDB
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); // helps with authentication

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
