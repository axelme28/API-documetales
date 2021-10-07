

exports.getIdCategoria = (categoria = '') => {
    let id = 0;
    switch (categoria.toLocaleLowerCase().trim()) {
        case 'biograficos':
            return(id = 1);
        case 'crimenes':
            return(id = 2);
        case 'historicos':
            return(id = 3);
        case 'belicos':
            return(id = 4);
        case 'deportes':
            return(id  = 5);
        case 'musicayconciertos':
            return(id = 6);
        case 'viajesyaventuras':
            return(id = 7);
        case 'politica':
            return(id = 8);
        default:
            break;
    }
}

exports.getClasificacion = (clasificacion = '') => {
    let id = 0;
    switch (clasificacion.toLocaleLowerCase().trim()) {
        case 'a':
            return(id = 1);
        case 'b15':
            return(id = 2);
        case 'c':
            return(id = 3);
        case 'd':
            return(id = 4);
        case 'aa':
            return(id = 5);
        default:
            break;
    }
}

exports.getIdiona = (idioma = '') => {
    let id = 0;
    idioma.toLowerCase().trim() === 'ingles' ? (id = 1) : (id = 2);
	return id;
}

exports.getPais = (pais = '') =>{
    let id = 0;
    pais.toLocaleLowerCase().trim() === 'mexico' ? (id = 1) : (id = 2);
    return id;
}