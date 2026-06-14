const HTTP = require('http')
const fs = require('fs')

const PORT = 3000


const app = HTTP.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} : new data is recieved\n`
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/':
                res.end("Home Page");
                break;
            case '/about':
                res.end("My self is aditya ");
                break;
            case '/contact-us':
                res.end("connect with whatsapp ");
                break;
            default : res.end("404 Error occure")
        }
        

    })
})
app.listen(PORT, () => {
    console.log(`server is running is sucessfully on : ${PORT}`);
})

