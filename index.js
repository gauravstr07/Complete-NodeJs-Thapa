const http = require("http");
const url = require("url");
const fs = require("fs");

const port = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello exoressJs");
  } else if (req.url === "/userapi") {
    fs.readFile(`${__dirname}/json1.json`, "utf-8", (err, data) => {
      console.log(data);
      res.end(data);
    });
  }
});

server.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
