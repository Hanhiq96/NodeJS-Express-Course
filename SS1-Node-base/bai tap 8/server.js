const http = require("http");
const url = require("url");
const port = 3000;
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  let readOverview = fs.readFileSync("./view/overview.html", "utf8");
  let readProduct = fs.readFileSync("./view/product.html", "utf8");
  const dataJson = JSON.parse(fs.readFileSync("./data/data.json", "utf8"));
  let cartTemplate = fs.readFileSync("./view/cart-template.html", "utf8");

  const { query, pathname } = url.parse(req.url, true);
  if (pathname === "/" || pathname === "/overview") {
    const replaceData = dataJson.map((fruit) => {
      return cartTemplate
        .replace("{{image}}", fruit.image)
        .replace("{{productName}}", fruit.productName)
        .replace("{{quantity}}", fruit.quantity)
        .replace("{{price}}", fruit.price)
        .replace("{{id}}", fruit.id);
    });
    const renderOverview = readOverview.replace("{{cart}}", replaceData);
    res.write(renderOverview);
  } else {
    const pathArr = pathname.split("/");
    let id = pathArr[pathArr.length - 1];
    let data = dataJson.find((data) => data.id == id);
    if (data) {
      console.log(data);

      readProduct = readProduct
        .replace("{{organic}}", data.organic)
        .replace("{{productName}}", data.productName)
        .replace("{{from}}", data.from)
        .replace("{{nutrients}}", data.nutrients)
        .replace("{{quantity}}", data.quantity)
        .replace("{{price}}", data.price)
        .replace("{{description}}", data.description);

      res.write(readProduct);
    } else {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf8" });
      res.write("<h1>page not found</h1>");
    }
  }
  res.end();
});
server.listen(port, "127.0.0.1", () => {
  console.log(`Server is running at http://localhost:${port}`);
});
