exports.queryCreateUser =
  "insert into plataforma_educativa.usuario(id, email, password, idRol, idUni) values (default, :email, :password, :idRol, :idUniversidad);";

exports.queryCreateAlumno =
  "insert into plataforma_educativa.alumno(nom_alumno,apellido_paterno,idUsu,boleta,apellido_materno)values(:nombre,:apellidoPaterno,:idUsuario,:boleta,:apellidoMaterno);";

exports.queryCreateUniversidad =
  "call plataforma_educativa.`Crear Universidad`(:nombre,:convenio);";

exports.queryCreateProfesor =
  "insert into plataforma_educativa.docente(id, nom_docente,apellido_materno, id_usu, no_trabajador, fecha_naci,apellido_paterno) values(default,:nombre,:apellidoMaterno,:idUsuario,:noTrabajador,:fechaNacimiento,:apellidoPaterno);";

exports.queryCreateAdmin =
  "call plataforma_educativa.`Crear Administrador`(:nom_admi, :apellido_paterno,:apellido_materno, :idUsuario, :direccion, :telefono);";

exports.queryCreateEquipo =
  "insert into equipo(id,nom_equipo,codigo_equipo) values (default,:nombre,:codigo);";

exports.queryCreateGrupo =
  "insert into grupo(id,equipo_id,usuario_id) values(default,:idEquipo,:idUsuario)";

exports.queryExistConvenio =
  `SELECT convenio FROM universidad`;

exports.queryCreatePost =
  'call plataforma_educativa.`crear publicacion`(:titulo_publicacion, :texto_publicacion, :id_equipo,:date)'

exports.queryViewPosts =  'call plataforma_educativa.`ver-publicaciones`(:id_usuario);'

exports.queryViewTeams = 'call plataforma_educativa.`ver-equipos`(:email);'

exports.queryLogin = 'select  usuario.id, usuario.email , usuario.`password`, rol.Rolcol, usuario.idUni ' + 
'from usuario ' +
'inner join rol on (rol.id_rol = usuario.idRol) where usuario.email = :email';