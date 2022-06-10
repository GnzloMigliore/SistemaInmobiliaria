var express = require('express');
var router = express.Router();
const controller = require('../controllers/propiedades');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* POST PROPIEDADES. */
router.post('/', async function(req, res, next) {
    res.json(await controller.postPropiedades(req.body));
  });
module.exports = router;
