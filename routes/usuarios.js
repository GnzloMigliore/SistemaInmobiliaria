var express = require("express");
var router = express.Router();
const data = require("../data/usuarios");
// const auth = require("../middlewares/Auth");


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
