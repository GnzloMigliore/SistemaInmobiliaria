const propiedades = require("../data/propiedades");

async function postPropiedades(body) {
  return propiedades.postPropiedades(body);
}
async function getPropiedades() {
  return propiedades.getAllProperties();
}
async function getPropiedad(id) {
  return propiedades.getPropiedad(id);
}
async function updatePropiedad(id) {
  return propiedades.updatePropiedad(id);
}
async function deletePropiedad(id) {
  return propiedades.deletePropiedad(id);
}
async function filtrarPorTipo(tipo) {
  return propiedades.filtrarPorTipo(tipo);
}
async function filtrarPromedio(tipo, barrio) {
  let properties = await propiedades.filtrarPromedio(tipo, barrio);
  let promedio = 0;
  properties.map((p) => {
    promedio += parseInt(p.precio);
    console.log("promedio dentro del map", promedio);
  });
  console.log(properties.length == 0 ? 0 : promedio / properties.length);
  return properties.length == 0 ? 0 : promedio / properties.length;
}
module.exports = {
  postPropiedades,
  getPropiedades,
  getPropiedad,
  updatePropiedad,
  deletePropiedad,
  filtrarPorTipo,
  filtrarPromedio,
};
