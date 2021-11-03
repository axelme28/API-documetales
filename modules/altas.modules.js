const { QueryTypes } = require('sequelize');
const db = require('../config/db.admin.config');


const {getRole} = require('../helpers/getId'); 
const {queryCreateAlumno,queryCreateUser} = require('../sql/querys.plataforma')

exports.altaAlumno = async (req, res) =>{

    const {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        boleta,
        email,
        password,
        idRol,
        idUniversidad,
    }= req.body;

    

    try {
        const idUsuario = await altaUser(email,password,idRol,idUniversidad);
        
        const result = await db.sequelize.query(queryCreateAlumno, {
            replacements: {
                nombre,
                apellidoPaterno,
                apellidoMaterno,
                boleta,
                idUsuario,
                idEquipo,
            },
            type: QueryTypes.INSERT,
    });
    res.status(200).json({result});
    } catch (error) {
        res.status(500).json({msg: 'Error al crear alumno'});
    }
}

altaUser =  async (
    email,
    password,
    idRol,
    idUniversidad,) =>{

    try {
        const idRol_ = getRole(idRol);
        
        const idUsu = await db.sequelize.query(queryCreateUser, {
            replacements: {
                email,
                password,
                idRol: idRol_,
                idUniversidad,
            },
            type: QueryTypes.INSERT,
    });
    return idUsu[0];
    } catch (error) {
        console.log(error);
    }
}
