const propiedades = require('../data/propiedades');

async function postPropiedades(body){    
    return propiedades.postPropiedades(body);
}

module.exports = {postPropiedades};