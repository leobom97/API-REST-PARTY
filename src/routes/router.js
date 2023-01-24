//Roteador Geral(Agrupador de Rotas)
const express = require('express')
const router = express.Router();

//Rotas Serviços
const serviceRouter = require('./serviceRoute');
router.use('/', serviceRouter);

//Rotas Fetas
const partyRouter = require('./partyRoute');
router.use('/', partyRouter);


module.exports = router;