exports.getDocumentales = 'SELECT * FROM documentales.ver_documentales;'

exports.insertDocumental = 'call documentales.insertar_documental(:Nombre,:Fecha_Lanzamiento,:Elenco,:Duracion,:Trama,:Productor,:Escritor,:Categoria,:Clasificacion,:Idioma,:Pais_origen,:Director,:URL);';

exports.deleteDocumental = 'call documentales.Eliminar_documental(:idDocumental);';

exports.getDocumetal = 'call documentales.ver_documental(:idDocumental);';

exports.logIn = 'call documentales.`LOG-IN`(:correo_u, :contrasena_u);';