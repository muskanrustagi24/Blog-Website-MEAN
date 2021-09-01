const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db.js');
const routes = require('./routes/routes.js')

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
})

app.use('/blogs', routes);


