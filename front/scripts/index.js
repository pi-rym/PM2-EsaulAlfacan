require("dotenv").config();

const { HOST, PORT } = process.env;
// Importación del módulo renderCard desde el archivo renderCard.js
const renderCard = require("./renderCard");
// Importación del módulo axios
const axios = require("axios");

// Declaración de una arrow function expresada
const fGetAxios = async (data) => {
  // Control del flujo de la solicitud con axios
  try {
    // Petición a el servidor
    const peticion = await axios.get(`http://${HOST}:${PORT}/movies`);

    // Validación para una petición exitosa
    if (peticion.status === 200) {
      const movieData = peticion.data;
      renderCard(movieData);
    } else {
      return `La solicitud no fue exitosa debido a el problema ${peticion.status} `;
    }
  } catch (error) {
    `La solicitud no se genero correctamente, se muestra${error}`;
  }
};

fGetAxios();
