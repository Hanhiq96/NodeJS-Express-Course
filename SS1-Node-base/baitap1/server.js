const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  // Cấu trúc:   fs.readFileSync(file, charset, callback)
  //  - file: File muốn đọc
  //  - charset: utf8 hoặc 1 mã phiên dịch khác
  //  - callback function
  const dataText = fs.readFileSync("./txt/read-this.txt", "utf8", () => {
    console.log("aaaaaaaaaaa");
  });

  console.log(dataText);
  // Cấu trúc: fs.writeFileSync(file, data, option)
  // - file: đường dẫn đến file cần ghi
  // - data: data muốn ghi vào file
  // - option: charset: utf8
  const dataInput = "This is data input";
  const dataAppend = "This is data append";
  const finalData = dataInput + "\n" + dataAppend;

  fs.writeFileSync("./txt/final.txt", finalData);
  console.log("Write file final successfull !!!");

  console.log(readFinal);
  const readFinal = fs.readFileSync("./txt/final.txt", "utf8");
  // res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  // res.write(dataText);
  // res.end();
});

server.listen(port, "127.0.0.1", function () {
  console.log(`listening on http://localhost:${port}`);
});
