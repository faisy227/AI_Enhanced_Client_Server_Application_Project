const cors = require('cors');
// get express
const express = require('express')
const path = require('path');
const app = express();


// get variables from .env file
// = true OR this
const PORT = process.env.PORT || 8000;
// cors: origin is an ARRAY of all domain that can be used
app.use(cors({
    origin: [
        'http://127.0.0.1:5500',
        'http://localhost:8000'
    ]
}))
// middlewear
app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Hello World!!</h1>")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
