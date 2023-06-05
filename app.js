const http = require("http");

// server your css as static
// app.use(express.static(__dirname));

http.createServer(function (req, res) {
 res.write("On the way to being a full stack engineer!");
//  console.log(__dirname);
//  res.sendFile('portfolio.html', {root: __dirname})
//  res.sendFile(__dirname + "/portfolio.html");
 res.end();
}).listen(3000);

console.log("Server started on port 3000");

