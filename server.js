const { readFileSync } = require('fs');
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    if(req.url=='/'){
        res.statusCode = 200;
        res.end('<h1>This is Shaurya</h1>')
       }else if(req.url=='/About'){
           res.statusCode = 200;
        res.end('<h1>About Shaurya</h1>')
       }else if(req.url=='/data'){
           res.statusCode = 200;
        const data = readFileSync('index.html');
        res.end(data.toString())
       }else{
           res.statusCode = 404;
        res.end('<h1>ERROR</h1>')
       }
})

server.listen(port,()=>{
    console.log(`Listen at ${port}`)
})