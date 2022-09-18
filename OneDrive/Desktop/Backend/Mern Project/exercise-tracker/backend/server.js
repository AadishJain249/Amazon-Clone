const express = require('express');
const cors = require('cors');
require('./database/mongodb')
require('dotenv').config();
const User=require('./routes/user')
const Exercise=require('./routes/exercise')
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/exercise',Exercise)
app.use('/user',User)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});