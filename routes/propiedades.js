var express = require("express");
var router = express.Router();
const auth = require("../middlewares/Auth");
const controller = require("../controllers/propiedades");
/* GET PROPIEDADES. */
router.get("/" ,auth, async function (req, res, next) {
  res.json(await controller.getPropiedades());
});
/* GET PROPIEDAD POR ID. */
router.get("/:id",auth,  async function (req, res, next) {
  res.json(await controller.getPropiedad(req.params.id));
});
/* POST PROPIEDADES. */
router.post("/" ,auth,  async function (req, res, next) {
  res.json(await controller.postPropiedades(req.body));
  console.log("entro");
});
/* PUT PROPIEDADES. */
router.put("/",auth , async function (req, res, next) {
  res.json(await controller.updatePropiedad(req.body));
});
/* DELETE PROPIEDADES. */
router.delete("/:id",auth , async function (req, res, next) {
  res.json(await controller.deletePropiedad(req.params.id));
});
/* FILTRAR POR VENTA/ALQUILER */
router.get("/filtrar/tipo",auth , async function (req, res, next) {
  res.json(await controller.filtrarPorTipo(req.query.tipo));
});
/* OBTENER PROMEDIO VENTA O ALQUILER */
router.get("/filtrar/promedio",auth , async function (req, res, next) {
  res.json(await controller.filtrarPromedio(req.query.tipo,req.query.barrio));
});
module.exports = router;
