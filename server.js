const cors = require('cors');
const path = require('path')
// get express
const express = require('express')
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
// imports ALL FILES from public:
app.use(express.static(path.join(__dirname, "public")));  // 2 static:    /style.css, /logo.png


app.get('/', (req, res) => {
     // This sends: public/index.html 
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
