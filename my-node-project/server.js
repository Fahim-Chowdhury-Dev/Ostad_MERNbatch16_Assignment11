import { createServer } from "node:http";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to My Node.js Server");
  }
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});