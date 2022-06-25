const usuarios = require("../data/usuarios");

async function addUser(body) {
  return usuarios.addUser(body);
}
async function login(body) {
  const user = await usuarios.findByCredential(body.email, body.password);
  const token = usuarios.generatedToken(user);
  return { user, token };
}
<<<<<<< HEAD
module.exports = { addUser, login };
=======
async function getUsers(){    
    return usuarios.getAllUsers();
}
module.exports = {addUser,login,getUsers};
>>>>>>> 21bf4e58c50d2c94c792be9fff5e53a631c70d27
