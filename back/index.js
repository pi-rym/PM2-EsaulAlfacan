// Este index es el ENDPOINT
// Importacion de las funcionalidades de server asignadas a la variable dentro del archivo back/index.js
const server = require("./src/server");

server.listen(3000, () => {
  console.log("Puerto 3000 funcionando");
});
