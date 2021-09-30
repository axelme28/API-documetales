

exports.getIdCategoria = (categoria = '') => {
    let id = 0;
    switch (categoria.toLocaleLowerCase().trim()) {
        case 'biograficos':
            return(id = 1);
        case 'sobre crímenes':
            return(id = 2);
        case 'históricos':
            return(id = 3);
        case 'bélicos':
            return(id = 4);
        case 'sobre deportes':
            return(id  = 5);
        case 'de música y conciertos':
            return(id = 6);
        case 'de viajes y aventuras':
            return(id = 7);
        case 'sobre política':
            return(id = 8);
        default:
            break;
    }
}
//TODO: problemas al insertar la categoria
exports.getClasificacion = (categoria = '') => {
    let id = 0;
    switch (categoria.toLocaleLowerCase().trim()) {
        case 'B':
            return(id = 1);
        case 'B15':
            return(id = 2);
        case 'C':
            return(id = 3);
        case 'D':
            return(id = 4);
        case 'AA':
            return(id = 5);
        case 'A':
            return(id = 6);
        default:
            break;
    }
}

exports.getIdiona = (idioma = '') => {
    let id = 0;
    idioma.toLowerCase().trim() === 'Ingles' ? (id = 1) : (id = 2);
	return id;
}

exports.getPais = (pais = '') =>{
    let id = 0;
    pais.toLocaleLowerCase().trim() === 'Mexico' ? (id = 1) : (id = 2);
    return id;
}