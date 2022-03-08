const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware 
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Project usa server is running')
})

app.listen(PORT, () => {
    console.log(`app is running at port ${PORT}`)
})