const bienvenidos = (req, res) => {
  res.status(200).send("Bienvenidos a nuestra app en el server de services");
};

module.exports = bienvenidos;
