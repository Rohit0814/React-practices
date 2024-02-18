const http = require('http');
const fs = require('fs')
const port = 8000;


const requestHandler = (req,res) =>{
    res.writeHead(200,{'content-type':'text/html'});
    let files='';
    switch(req.url){
        case '/':
            files="./index.html";
            break;
        case '/about':
            files = "./about.html";
            break;
        default:
            files = './404.html';
    }

    fs.readFile(files,function(err,data){
        if(err){
            return res.end('error : ',err);
        }
        console.log(files);
        res.end(data);
    });
}

const server = http.createServer(requestHandler)


server.listen(port,function(err){
    if(err){
        console.log("Server has some issues..... ", err);
        return;
    }
    console.log("server is stated and running properly... ",port);
});