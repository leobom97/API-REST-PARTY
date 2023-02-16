const http = require("http");
const port = process.env.PORT || 3000;
const app = require("./app");
const server = http.createServer(app);

server.listen(port, (req, res) => {
  try {
    console.log(`Servidor rodando no endereço: http://localhost:${port}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});
