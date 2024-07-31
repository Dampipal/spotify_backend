const express = require('express');

const app = express();

const PORT = 3004

app.get("/",(req,res) =>{
    res.send("Welcome on Spotify backend")
})

app.listen(PORT,() =>{
    console.log(`Server on running port ${PORT}`);
})