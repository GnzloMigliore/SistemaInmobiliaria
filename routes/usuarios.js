var express = require("express");
var router = express.Router();
const controller = require("../controllers/usuarios");
const validarRegistro = require("../middlewares/Registro");
const auth = require("../middlewares/Auth");

/* REGISTRO USUARIO */
router.post("/", validarRegistro, async function (req, res) {
  const user = req.body;
  user.rol = "usuario";
  const result = await controller.addUser(user);
  res.json(result);
});
/* LOGIN USUARIO */
router.post("/login", async function (req, res) {
  try {
    const result = await controller.login(req.body);
    res.send(result);
  } catch (error) {
    res.status(401).send("Usuario o Contraseña no son válidas");
  }
});
/* PUT USUARIO. */
router.put("/", auth, async function (req, res) {
  res.json(await controller.updateUser(req.body));
});
/* GET USUARIOS. */
router.get("/", auth, async function (req, res) {
  res.json(await controller.getUsers());
});
/* DELETE USUARIO. */
router.delete("/:id", auth, async function (req, res) {
  res.json(await controller.deleteUser(req.params.id));
});
module.exports = router;
