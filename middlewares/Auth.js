const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("authorization");
  try {
    const user = jwt.verify(token, process.env.CLAVESECRETA);
    console.log(user);
    next();
  } catch (error) {
    res.status(401).send({ err: error });
  }
}

module.exports = auth;
