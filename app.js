/**
 * Created by heriipurnama on 18/10/15.
 */
var http = require ('http');
var fs   = require('fs'); //module bawaan dr node.js filestream

http.createServer(function(req,res) {
    var code = 0;
    var file = " ";

    if(req.url == "/") { //handle request
    //index
        kode = 200;
        file = "index.html";
   }else if(req.url == "/contac"){
       //kontak
        kode = 200;
        file = "contac.html";
   }else{
       //not foud
        kode = 404;
        file = "404.html";
   }
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream('./template/'+file).pipe(res);

}).listen(8888);


console.log("server running di port 8888");