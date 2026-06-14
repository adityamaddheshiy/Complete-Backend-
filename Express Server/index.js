const express = require('express');
const fs = require('fs')

const app = express();
const PORT = 3000;

app.use((req, res) => {
    const log = `${new Date().toISOString()}: ${req.url} new data is received\n`;
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send("404 something went wrong");
        }
        switch (req.url) {
            case '/':
                res.send("Home Page");
                break;
            case '/about':
                res.send("This is about page my name is aditya maddheshiya ");
                break;
            case '/contact-us':
                res.send("contact with us using whatsapps Number is :7068722544");
                break;
            default:
                res.status(404).send("something is went wrong || Page is not found ")
        }

    });
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})