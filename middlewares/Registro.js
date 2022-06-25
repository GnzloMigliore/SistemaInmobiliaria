
const usuarios = require('../data/usuarios');
async function registro(req, res, next) {
   let user = await usuarios.getUser(req.body.email)
  if(!user){
    next();
  }else{
    res.status(401).send("Ya existe una cuenta con ese email");
  }
}

module.exports = registro;