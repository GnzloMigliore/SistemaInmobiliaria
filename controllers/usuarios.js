const usuarios = require("../data/usuarios");

async function addUser(body) {
  return usuarios.addUser(body);
}
async function login(body) {
  const user = await usuarios.findByCredential(body.email, body.password);
  const token = usuarios.generatedToken(user);
  console.log("entro aca");
  return { user, token };
}
async function getUsers() {
  return usuarios.getAllUsers();
}
async function deleteUser(id) {
  return usuarios.deleteUser(id);
}
async function updateUser(user) {
  return usuarios.updateUser(user);
}
module.exports = { addUser, login, getUsers, deleteUser, updateUser };
