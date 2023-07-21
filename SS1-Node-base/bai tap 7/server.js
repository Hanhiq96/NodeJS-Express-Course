const http = require("http");
const url = require("url");
const port = 3000;
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  let readOverview = fs.readFileSync("./view/overview.html", "utf8");
  let readProduct = fs.readFileSync("./view/product.html", "utf8");
  // res.write(readOverview); đọc trang html
  // res.write(readProduct); đọc trang html

  const { query, pathname } = url.parse(req.url, true);
  if (pathname === "/" || pathname === "/overview") {
    res.write(readOverview);
  } else if (pathname === "/product") {
    res.write(readProduct);
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf8" });
    res.write("<h1>page not found</h1>");
  }
  res.end();
});
server.listen(port, "127.0.0.1", () => {
  console.log(`Server is running at http://localhost:${port}`);
});
