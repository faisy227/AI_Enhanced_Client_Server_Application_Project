// get express
const express = require('express')
const path = require('path');
const app = express();
// get variables from .env file
// = true OR this
const PORT = process.env.PORT || 8000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send(<h1>Hello World</h1>)
})