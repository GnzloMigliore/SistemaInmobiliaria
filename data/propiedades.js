const conn = require("./conn");
const INMOBILIARIA = "inmobiliaria";
const PROPIEDADES = "propiedades";
const objectId = require("mongodb").ObjectId;

async function postPropiedades(propiedad) {
  const clientMongo = await conn.getConnection();
  const result = await clientMongo
    .db(INMOBILIARIA)
    .collection(PROPIEDADES)
    .updateOne(
      { _id: new objectId(inventor._id) },
      {
        $set: {
          tipo: propiedad.tipo,
          domicilio: propiedad.domicilio,
          barrio: propiedad.barrio,
          dormitorios: propiedad.dormitorios,
          antiguedad: propiedad.antiguedad,
          condición: propiedad.condición,
          descripcion: propiedad.descripcion,
        },
      }
    );
    return result
}
module.exports = {postPropiedades};