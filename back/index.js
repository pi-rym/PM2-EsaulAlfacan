require("dotenv").config();
const { PORT } = process.env;
const APP = require("./src/server");

// const PORT = 3000;

//

APP.listen(PORT, () => {
  console.log(`App of server is ready on port ${PORT}`);
});
