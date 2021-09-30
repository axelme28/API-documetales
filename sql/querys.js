exports.insertDocumental = 
'INSERT INTO documental(Nombre,Fecha_lanzamiento,Elenco,Duracion,Trama,Productor,Escritor,idCategoria,idClasificacion,idIdioma,idPais_origen,director)';

exports.deleteDocumental = 'DELETE FROM `documentals`.`documental`';

exports.getDocumental = 'SELECT `documental`.`idDocumental`,`documental`.`Nombre`,`documental`.`Fecha_lanzamiento`,`documental`.`Elenco`,`documental`.`Duracion`,`documental`.`Trama`,`documental`.`Productor`,`documental`.`Escritor`,`documental`.`idCategoria`,`clasificacion`.`Clasificacion`,`idioma`.`Idioma`,`pais_origen`.`Pais`,`documental`.`director`FROM `documentals`.`documental` INNER JOIN categoria ON(categoria.idCategoria = documental.idCategoria) INNER JOIN pais_origen ON(pais_origen.idPais_origen = documental.idPais_origen) INNER JOIN idioma ON(idioma.idIdioma = documental.idIdioma) INNER JOIN clasificacion ON(clasificacion.idClasificacion = documental.idClasificacion)';
