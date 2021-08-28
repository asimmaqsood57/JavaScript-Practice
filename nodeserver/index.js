const http = require("http");

const hostName = "localhost";
const port = 80;

const server = http.createServer((req, res) => {
  console.log(req.headers);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  res.end("Welcome to our Node js Server");
});

server.listen(80, () => {
  console.log("server running at port 80");
});
