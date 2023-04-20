const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }
    res.setHeader('Content-Type', 'text/html');
    res.end(
    `<h>Opps!</h1>
    <p>We cant fint the page</p>
    <a href="/">back home</a>
    `)
})

server.listen(3453)