require('dotenv').config()
const express = require('express');

//intializa an express app
const app = express();

//some routes
app.get('/', (req, res) => {
    res.status(200).json({message: 'From Here Again'});
})

app.get('/sercet', (req, res) => {
    res.status(200).json({message: process.env.SECRET})
})



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server up and running on http://localhost:${port}`);
})