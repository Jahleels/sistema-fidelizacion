const models = require('../models');

module.exports = {
    getPersonas: async (req, res) => {
        try {
            const listPersonas = await models.Persona.find({});
            res.status(200).json(listPersonas); 
        } catch( err ) {
            res.status(500).json({msg: `Ocurrió un error ${err}`});
        }
    },

    postPersona: async (req, res) => {
        try {
            await models.Persona.create({
                name: req.body.name,
                cc: req.body.cc,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                city: req.body.city,
                address: req.body.address,
                barrio: req.body.barrio,
                puesto: req.body.puesto,
                mesa: req.body.mesa,
                lider: req.body.lider,
                user: req.body.user
            });
            res.status(200).json({msg: "Persona guardada"});
        } catch(err) {
            res.status(500).send(err)
        }
    },

}