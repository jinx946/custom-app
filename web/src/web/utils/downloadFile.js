// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/plain; charset=utf-8",
//   });
//   res.end("Hello, World! 个狗东西");
// });
// server.listen(3000, () => {
//   console.log("server is listening on port 3000");
// });

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//   const dirPath = path.join(__dirname, "testDom"); // 要读取的文件夹路径

//   // 1. 读取文件夹内容
//   fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       return res.end("Error reading directory");
//     }

//     // 2. 生成 HTML 列表
//     const fileList = files
//       .map((file) => {
//         const icon = file.isDirectory() ? "📁" : "📄";
//         return `<li><a href="${file.name}" download>${icon} ${file.name}</a></li>`;
//       })
//       .join("");

//     // 3. 返回 HTML 页面
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     res.end(`
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <title>文件列表</title>
//           <style>
//             body { font-family: Arial, sans-serif; padding: 20px; }
//             ul { list-style: none; padding: 0; }
//             li { margin: 5px 0; }
//             a { text-decoration: none; color: #0366d6; }
//             a:hover { text-decoration: underline; }
//           </style>
//         </head>
//         <body>
//           <h1>文件列表</h1>
//           <ul>${fileList}</ul>
//         </body>
//       </html>
//     `);
//   });
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

const http = require("http");
const fs = require("fs");
const fsP = require("fs").promises;
const path = require("path");
async function getCurrentLogFile() {
  const dateStr = new Date().toISOString().split("T")[0]; // 如 "2023-10-01"
  const logDir = path.join(__dirname, "logs");
  const logFile = path.join(logDir, `app-${dateStr}.log`);

  // 确保 logs 目录存在
  await fsP.mkdir(logDir, { recursive: true });
  return logFile;
}
async function logWithRotation(message) {
  const logFile = await getCurrentLogFile();
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;

  await fsP.appendFile(logFile, logMessage, "utf8");
}

const server = http.createServer((req, res) => {
  const dirPath = path.join(__dirname, "/");
  const filePath = path.join(dirPath, req.url);

  // 1. 检查文件是否存在
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("File not found");
    }

    // 2. 如果是文件夹，返回文件列表
    if (stats.isDirectory()) {
      fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end("Error reading directory");
        }

        const fileList = files
          .map((file) => {
            const icon = file.isDirectory() ? "📁" : "📄";
            return file.name === "logs"
              ? ""
              : `<li><a href="${path.join(req.url, file.name)}" ${
                  file.isDirectory() ? "" : "download"
                }>${icon} ${file.name}</a></li>`;
          })
          .join("");

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`
          <!DOCTYPE html>
          <html>
            <head><title>文件列表</title></head>
            <body>
             <a href="/">返回</a>
              <h1>文件列表</h1>
              <ul>${fileList}</ul>
              <script>
              console.log(window.location.href)
              </script>
            </body>
          </html>
        `);
      });
    }
    // 3. 如果是文件，强制下载
    else {
      const fileName = path.basename(filePath);
      console.log(fileName);
      logWithRotation(`读取文件${fileName}`);
      res.writeHead(200, {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="${fileName}"`, // 关键：强制下载
      });

      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    }
  });
});

const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
