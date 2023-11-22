const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 4000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

   // Start the server
   app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = mongoose;