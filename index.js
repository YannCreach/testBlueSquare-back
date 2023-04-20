const express = require('express');
const app = express();
const router = require('./app/router');
const dotenv = require('dotenv');
var cors = require('cors');

dotenv.config();

const serverPort = process.env.SERVER_PORT;

app.use(cors({ origin: '*' }));
app.use(express.json());


// app.get('/authorized', function (req, res) {
//   res.send('Secured Resource');
// });

app.use(router);

app.listen(serverPort);

console.log('Running on port ', serverPort);
