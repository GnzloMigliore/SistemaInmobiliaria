const conn = require("./conn");
const INMOBILIARIA = "INMOBILIARIA";
const PROPIEDADES = "PROPIEDADES";
const objectId = require('mongodb').ObjectId;
/* Metodo para ingresar una propiedad */
async function postPropiedades(propiedad) {
  const clientMongo = await conn.getConnection();
  const result = await clientMongo
    .db(INMOBILIARIA)
    .collection(PROPIEDADES)
    .insertOne({
        tipo: propiedad.tipo,
        domicilio: propiedad.domicilio,
        barrio: propiedad.barrio,
        dormitorios: propiedad.dormitorios,
        antiguedad: propiedad.antiguedad,
        condición: propiedad.condición,
        descripcion: propiedad.descripcion,  
        moneda: propiedad.moneda,
        precio: propiedad.precio,  
    });
  return result;
}
async function getAllProperties(){
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
                      .db(INMOBILIARIA)
                      .collection(PROPIEDADES)
                      .find()
                      .toArray();    
  return supplies;
}
async function getPropiedad(id){
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
              .db(INMOBILIARIA)
              .collection(PROPIEDADES)
              .findOne({_id: new objectId(id)});
  return supplies;
}
async function updatePropiedad(propiedad) {
  const clientMongo = await conn.getConnection();
  const result = await clientMongo
    .db(INMOBILIARIA)
    .collection(PROPIEDADES)
    .updateOne(
      { _id: new objectId(propiedad._id) },
      {
        $set: {
          tipo: propiedad.tipo,
          domicilio: propiedad.domicilio,
          barrio: propiedad.barrio,
          dormitorios: propiedad.dormitorios,
          antiguedad: propiedad.antiguedad,
          condición: propiedad.condición,
          descripcion: propiedad.descripcion,
          moneda: propiedad.moneda,
          precio: propiedad.precio,  
        },
      }
    );

  return result;
}
async function deletePropiedad(id) {
  const clientMongo = await conn.getConnection();
  const result = await clientMongo
    .db(INMOBILIARIA)
    .collection(PROPIEDADES)
    .deleteOne({ _id: new objectId(id) });

  return result;
}
async function filtrarPorTipo(tipo) {
  console.log(tipo);
  const connectiondb = await conn.getConnection();
  const propiedades = await connectiondb
    .db(INMOBILIARIA)
    .collection(PROPIEDADES)
    .find({"tipo": tipo})
    .toArray();
  return propiedades;
}
async function filtrarPromedio(tipo,barrio) {
  console.log(tipo);
  const connectiondb = await conn.getConnection();
  const propiedades = await connectiondb
    .db(INMOBILIARIA)
    .collection(PROPIEDADES)
    .find({"$and":[{"tipo": tipo},{"barrio": barrio}]})
    .toArray();
  return propiedades;
}
module.exports = {
                   postPropiedades,
                   getAllProperties,
                   getPropiedad,
                   updatePropiedad,
                   deletePropiedad,
                   filtrarPorTipo,
                   filtrarPromedio
                  };
