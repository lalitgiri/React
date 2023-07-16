// const http = require("http");
// const host = "localhost";
// const port = 8000;
// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end("My first server!");
// };

// const server = http.createServer(requestListener);

// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });

const { readFileSync, writeFileSync } = require("fs");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/:fileName", (request, response) => {
  const fileName = request.params.fileName;

  if (!!fileName?.length) {
    const data = readFileSync(`./json-files/${fileName}`);
    response.setHeader("Content-Type", "application/json");
    response.send(`${data}`);
    return;
  }
  response.send(`"${fileName}" file not found`);
});

app.post("/write-file/:fileName", (request, response) => {
  const path = `./json-files/${request.params.fileName}`;
  const body = request.body;
  try {
    writeFileSync(path, JSON.stringify(body, null, 2), "utf8");
    response.send("Data successfully saved to disk");
    console.log("Data successfully saved to disk");
  } catch (error) {
    console.log("An error has occurred ", error);
    response.send("An error has occurred");
  }
});

app.listen(9000, console.log("App Listening to port 9000"));
