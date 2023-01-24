const express = require("express");
const partyRouter = express.Router();
const partyController = require("../controllers/partyController");

partyRouter
  .route("/party")
  .post((req, res) => partyController.create(req, res));
partyRouter
  .route("/parties")
  .get((req, res) => partyController.getAll(req, res));
partyRouter
  .route("/party/:id")
  .get((req, res) => partyController.getParty(req, res));
partyRouter
  .route("/party/:id")
  .delete((req, res) => partyController.deleteParty(req, res));
partyRouter
  .route("/party/:id")
  .put((req, res) => partyController.updateParty(req, res));

module.exports = partyRouter;
