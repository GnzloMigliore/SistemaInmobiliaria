var express = require("express");
var router = express.Router();
const controller = require("../controllers/usuarios");
const validarRegistro = require("../middlewares/Registro");
const auth = require("../middlewares/Auth");

/* REGISTRO USUARIO */
router.post("/",validarRegistro ,async function (req, res) {
  const user = req.body;
  user.rol = 'usuario'
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
router.put("/",auth , async function (req, res) {
  res.json(await controller.updateUser(req.body));
});
/* GET USUARIOS. */
router.get("/" , async function (req, res) {
  res.json(await controller.getUsers());
});
/* DELETE USUARIO. */
router.delete("/:id" , async function (req, res) {
  res.json(await controller.deleteUser(req.params.id));
});
module.exports = router;
