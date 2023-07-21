const http = require("http");
const url = require("url");
const port = 3000;

const server = http.createServer((req, res) => {
  const { query, pathname } = ulr.parse(req.url, true);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });

  if (pathname === "/") {
    res.write("<h1>Wecome to the homepage</h1>");
  } else if (pathname === "/product") {
    res.write("<h1>Product</h1>");
  } else if (pathname === "/overview") {
    res.write("<h1>Wecome overview</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf8" });
    res.write("<h1>page not found</h1>");
  }

  res.end();
});
server.listen(port, "127.0.0.1", () => {
  console.log(`Server is running at http://localhost:${port}`);
});
