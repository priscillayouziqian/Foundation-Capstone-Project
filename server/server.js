// console.log("hello server.js")
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const {getDeals} = require('./controller');

app.get('/home/:type', getDeals);

const SERVER_PORT = 5050; 
app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));