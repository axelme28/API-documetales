

exports.getIdCategoria = (categoria = '') => {
    let id = 0;
    switch (categoria.toLocaleLowerCase().trim()) {
        case 'biograficos':
            return(id = 1);
        case 'sobrecrímenes':
            return(id = 2);
        case 'históricos':
            return(id = 3);
        case 'bélicos':
            return(id = 4);
        case 'sobredeportes':
            return(id  = 5);
        case 'demúsicayconciertos':
            return(id = 6);
        case 'deviajesyaventuras':
            return(id = 7);
        case 'sobrepolítica':
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
        case 'a':
            return(id = 6);
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