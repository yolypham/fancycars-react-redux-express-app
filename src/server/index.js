const express = require('express');
const cors = require('cors');
const cars = require('./routes/cars');
const availability = require('./routes/availability');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/cars', cars);
app.use('/availability', availability);

app.listen(8081, () => console.log('Listening on port 8081!'));
