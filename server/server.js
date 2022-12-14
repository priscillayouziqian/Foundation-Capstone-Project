// console.log("hello server.js")
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const {getDeals, postDeals, deleteDeals} = require('./controller');

app.get('/home/deals/:type', getDeals);
app.post('/home/newpost', postDeals);
app.delete('/home/deals/:id', deleteDeals);

const SERVER_PORT = 5050; 
app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));