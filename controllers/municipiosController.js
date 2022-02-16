const models = require('../models');

module.exports = {
    getMunicipios: async (req, res) => {
        try {
            const listMunicipios = await models.Municipios.find({}, {municipio:1, _id:0});
            let municipios = []
            listMunicipios.forEach(listMunicipios => municipios.push(listMunicipios.municipio))
            res.status(200).send(municipios);
        } catch (err) {
            res.status(500).send({msg: err});
        }

    },
    getBarrios: async (req, res) => {
        try {
            const listBarrios = await models.Municipios.find({}, {barrios:1, _id:0});
            let barrioArray = listBarrios[0].barrios;
            res.status(200).send(barrioArray);
        } catch (err) {
            res.status(500).send({msg: err});
        }

    },
     postMunicipios: async (req, res) => {
         console.log(req)
         try {
             await models.Municipios.create({
                 municipio: req.body.municipio,
                 barrios: req.body.barrios,
                 puestosVotacion: req.body.puestosVotacion
             });
             res.status(200).json({msg: "did it!"});
         } catch (err) {
             res.status(500).json(err);
         }
     }
}