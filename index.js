require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/login',(req,res)=>{
    res.send(`<H1>Login On hello New World</H1>`)
})

app.get('/signup',(req,res)=>{
    res.send(`<h1>SignUp first then login on website </h1>`)
})


app.listen(PORT, () => {
    console.log(`PORT is running on No.${PORT}`);
});

