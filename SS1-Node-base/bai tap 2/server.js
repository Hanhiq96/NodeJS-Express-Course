const http = require("http");
const port = 3000;
const fs = require("fs");
const server = http.createServer((req, res) => {
  // b1:khởi tạo
  // b2:tạo folder txt có file final.txt
  // b3:require fs vào và sử dụng hàm fs.readFileSync
  const readFinal = fs.readFileSync("./txt/final.txt", "utf8");
  console.log(readFinal);
  // b4:in ra màn hình client
  res.writeHead(200, { "Conten-Type": "text/html" });
  res.write(readFinal);
  res.end();
});
server.listen(port,"127.0.0.1",function(){
    console.log(`listening on http://localhost:${port}`);
})