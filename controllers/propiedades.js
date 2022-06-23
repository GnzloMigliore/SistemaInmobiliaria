const propiedades = require('../data/propiedades');

async function postPropiedades(body){    
    return propiedades.postPropiedades(body);
}
async function getPropiedades(){    
    return propiedades.getAllProperties();
}
async function getPropiedad(id){    
    return propiedades.getPropiedad(id);
}
async function updatePropiedad(id){    
    return propiedades.updatePropiedad(id);
}
async function deletePropiedad(id){    
    return propiedades.deletePropiedad(id);
}
async function filtrarPorTipo(tipo){    
    return propiedades.filtrarPorTipo(tipo);
}
module.exports = {postPropiedades,getPropiedades,getPropiedad,updatePropiedad,deletePropiedad,filtrarPorTipo};