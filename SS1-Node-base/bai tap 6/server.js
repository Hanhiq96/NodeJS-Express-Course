const http = require("http");
const url = require("url");
const port = 3000;
const fs = require("fs");

const server = http.createServer((req, res) => {
  // read file data.json
  const dataJson = fs.readFileSync("./data/data.json", "utf-8");

  const dataObject = JSON.parse(dataJson);
//   console.log(dataObject);

  const { query, pathname } = url.parse(req.url, true);
  res.writeHead(200, { "Content-Type": "application/json; charset=utf8" });

  if (pathname === "/") {
    res.write("<h1>Wecome to the homepage</h1>");
  } else if (pathname === "/product") {
    res.write("<h1>Product</h1>");
  } else if (pathname === "/overview") {
    res.write("<h1>Wecome overview</h1>");
  } else if (pathname === "/api") {
    // hiển thị file data.json ra client
    res.write(dataJson);
  } else {
    const pathArr = pathname.split("/");
    let id = pathArr[pathArr.length - 1];
    let data = dataObject.find((data) => data.id == id);
    if (data) {
      res.write(JSON.stringify(data));
    } else 
    res.writeHead(404, { "Content-Type": "text/html; charset=utf8" });
    res.write("<h1>page not found</h1>");
  }

  res.end();
});
server.listen(port, "127.0.0.1", () => {
  console.log(`Server is running at http://localhost:${port}`);
});
