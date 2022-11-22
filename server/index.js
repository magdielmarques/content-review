const http = require("http");

const server = http.createServer((req, res) => {
  console.log("method", req.method);
  console.log("url", req.url);
  console.log("request - um pedido", req);
  console.log("response - enviar algo", res);
  res.statusCode = 400;
  res.end("<h1>Testing</h1>");
});

server.listen(3000, () => {
  console.log("Server is running");
  // console.log("GET - PUT - PATCH - POST");
  // console.log("MCV");
});
