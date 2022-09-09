// console.log("hello server.js")
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const {getDeals, postDeals} = require('./controller');

app.get('/home/deals/:type', getDeals);
app.post('/home/newpost', postDeals);

const SERVER_PORT = 5050; 
app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));