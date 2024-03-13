const getUser = (req, res) => {
  res.status(200).send("Se esta ejecutando el controlador en la ruta /users");
};

module.exports = getUser;
