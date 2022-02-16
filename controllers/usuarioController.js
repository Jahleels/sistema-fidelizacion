const models = require("../models");
const bcrypt = require("bcrypt");
const token = require("../services/token");

module.exports = {
  login: async (req, res, next) => {
    try {
      // console.log(req.body.correo)
      let user = await models.Usuario.findOne({
        name: req.body.name,
      });
      if (user) {
        let match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
          const tokenReturn = await token.encode(user);
          res.status(200).json({ user, tokenReturn });
        } else {
          res.status(401).send({
            message: "Password Incorrecto",
          });
        }
      } else {
        res.status(404).send({
          message: "El usuario no existe o esta inactivo",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(error);
    }
  },

  add: async (req, res, next) => {
    try {
      let checkEmail = await models.Usuario.findOne({
        correo: req.body.usuario,
      });
      if (checkEmail) {
        res.status(404).send({
          message: "El usuario ya existe",
        });
      } else {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const reg = await models.Usuario.create(req.body);
        res.status(200).json(reg);
      }
    } catch (error) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next();
    }
  },
};
