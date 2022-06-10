var express = require("express");
var router = express.Router();
const data = require("../data/usuarios");
// const auth = require("../middlewares/Auth");

/* GET agrego un usuario */
router.post("/", async function (req, res) {
  //TODO:validar
  const user = req.body;
  const result = await data.addUser(user);
  res.json(result);
});

/* post logueo  un usuario */
router.post("/login", async function (req, res) {
  try {
    const user = await data.findByCredential(req.body.email, req.body.password);
    const token = data.generatedToken(user);
    res.send({ user, token });
  } catch (error) {
    console.log("salgo por aca");
    res.status(401).send(error.menssage);
  }
});

module.exports = router;
