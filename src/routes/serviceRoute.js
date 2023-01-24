const express = require("express");
const serviceRouter = express.Router();
const serviceController = require("../controllers/serviceController");

//Endpoints
serviceRouter
  .route("/service")
  .post((req, res) => serviceController.create(req, res));
serviceRouter
  .route("/services")
  .get((req, res) => serviceController.getAll(req, res));
serviceRouter
  .route("/service/:id")
  .get((req, res) => serviceController.getService(req, res));
serviceRouter
  .route("/service/:id")
  .put((req, res) => serviceController.updateService(req, res));
serviceRouter
  .route("/service/:id")
  .delete((req, res) => serviceController.deleteService(req, res));

module.exports = serviceRouter;
