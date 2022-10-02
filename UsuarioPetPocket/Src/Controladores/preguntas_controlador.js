const preguntasCtrl ={}
const orm = require('../Base de datos/BaseDatos.orm')
const sql =require('../Base de datos/BaseDatos.sql')

preguntasCtrl.mostrar =(req,res)=>{
    res.render('preguntas/preguntas')
}

preguntasCtrl.mandar= async(req,res)=>{
    const id =req.user.idUsuarios
    const {tituloPregunta,descripcionPregunta,fechaPregunta,horaPregunta}= req.body
    const nuevoEnvio ={
        tituloPregunta,
        descripcionPregunta,
        fechaPregunta,
        horaPregunta,
    }
    await orm.preguntas.create(nuevoEnvio)
    req.flash('succes','Guardado con exito')
    res.redirect('/preguntas/preguntasLi/'+id)
}

preguntasCtrl.lista = async(req,res)=>{
    
    const lista = await sql.query('select * from preguntas')
    res.render('preguntas/preguntasLi',{lista})
}

preguntasCtrl.traer = async(req,res)=>{
    const ids = req.params.id
    const lista = await sql.query('select * from preguntas where idAyudaPet =?',[ids])
    res.render('preguntas/preguntasEd',{lista})
}

preguntasCtrl.actualizar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    const {tituloPregunta,descripcionPregunta,fechaPregunta,horaPregunta}= req.body
    const nuevoEnvio = {
        tituloPregunta,
        descripcionPregunta,
        fechaPregunta,
        horaPregunta,
    }
    await orm.preguntas.findOne({ where: { idAyudaPet: id } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'se actualizo con exito')
            res.redirect('/preguntas/preguntasLi/' + ids);
        })
}

preguntasCtrl.eliminar = async (req,res)=>{
    const ids = req.params.id
    const id = req.user.idUsuarios
    await orm.preguntas.destroy({where: { idAyudaPet: ids }})
    .then(()=>{
        req.flash('succes','Actualizado con exito')
        res.redirect('/preguntas/preguntasLi/'+ id)
    })
    
}

module.exports = preguntasCtrl