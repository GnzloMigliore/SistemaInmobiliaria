const conn = require("./conn");
const INMOBILIARIA = "INMOBILIARIA";
const PROPIEDADES = "PROPIEDADES";


async function postPropiedades(propiedad) {
  const clientMongo = await conn.getConnection();
  const result = await clientMongo
    .db(INMOBILIARIA)
    .collection(PROPIEDADES)
    .insertOne(
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