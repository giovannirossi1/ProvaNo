var http = require("http");

var express = require("express");
var apiServer = express();

var hostname = "127.0.0.1";
var port = 3000;

apiServer.listen(port, hostname, () => {
    console.log("server running at http://%s:%d/", hostname, port);
});

apiServer.get("/nome", function(req, res)=>{
    console.log("ho ricevuto una get su nome");
    res.send("ciao, il nome del server: NODEROSSI");
});
apiServer.get("/somma",(req, res)=>{
    console.log("richiesta", req.query);
    if(req.query.a && req.query.b){
        var ris= req.query.a-(-req.query.b);//non uso il + perchè serve per concatenare le stringhe
        console.log("ris= ", ris);
        res.send("{\"risultato\"}":"+ris+"}");
                 }else
                 res.send("parametri non corretti");
    
});
    apiServer.get("/", function(req,res)){
                  res.send("sei in home");
                  }
