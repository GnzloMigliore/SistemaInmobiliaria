const conn = require("./conn");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const INMOBILIARIA = "INMOBILIARIA";
const USUARIOS = "USUARIOS";

// Creacion de usuarios
async function addUser(user) {
  const connectiondb = await conn.getConnection();
  user.password = await bcrypt.hash(user.password, 8);

  const users = await connectiondb
    .db(INMOBILIARIA)
    .collection(USUARIOS)
    .insertOne(user);

  console.log(user);
  return user;
}

//encontrar usuario
async function findByCredential(emailUsuario, passwordUsuario) {
  const connectiondb = await conn.getConnection();
  const user = await connectiondb
    .db(INMOBILIARIA)
    .collection(USUARIOS)
    .findOne({ email: emailUsuario });

  if (!user) {
    throw new Error("Usuario o Contraseña no son válidas");
  }

  const isMatch = await bcrypt.compare(passwordUsuario, user.password);

  if (!isMatch) {
    throw new Error("Usuario o Contraseña no son válidas");
  }

  return user;
}

// generador de token
function generatedToken(user) {
  const token = jwt.sign({ _id: user._id }, process.env.CLAVESECRETA, {
    expiresIn: "2h",
  });
  return token;
}
async function getUser(email) {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(INMOBILIARIA)
    .collection(USUARIOS)
    .findOne({ email: email });
  return supplies;
}
module.exports = { addUser, findByCredential, generatedToken, getUser };
