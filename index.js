const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  res.end("Hello from http");
});

server.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
