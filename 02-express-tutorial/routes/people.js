const express = require("express");
const peopleRouter = express.Router();
const {
  addPerson,
  getPeople,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people");
const { people } = require("../data");

peopleRouter.get("/", (req, res) => {
  getPeople(req, res);
});

peopleRouter.post("/", (req, res) => {
  addPerson(req, res);
});

peopleRouter.get("/:id", (req, res) => {
  getPerson(req, res);
});

peopleRouter.put("/:id", (req, res) => {
  updatePerson(req, res);
});

peopleRouter.delete("/:id", (req, res) => {
  deletePerson(req, res);
});

module.exports = { peopleRouter };
