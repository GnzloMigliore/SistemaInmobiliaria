var express = require("express");
var router = express.Router();
const controller = require("../controllers/usuarios");
const validarRegistro = require("../middlewares/Registro");
const auth = require("../middlewares/Auth");

/* REGISTRO USUARIO */
router.post("/",validarRegistro ,async function (req, res) {
  const user = req.body;
  user.rol = 'usuario'
  console.log(user);
  const result = await controller.addUser(user);
  res.json(result);
});
/* LOGIN USUARIO */
router.post("/login", async function (req, res) {
  try {
    const result = await controller.login(req.body);
    res.send(result);
  } catch (error) {
    console.log("salgo por aca");
    res.status(401).send(error.menssage);
  }
});
/* PUT USUARIO. */
router.put("/",auth , async function (req, res, next) {
  res.json(await controller.updateUser(req.body));
});
/* GET USUARIOS. */
router.get("/" , async function (req, res, next) {
  res.json(await controller.getUsers());
});
module.exports = router;
