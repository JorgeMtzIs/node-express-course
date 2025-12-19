const { people } = require("../data");

function addPerson(req, res) {
  if (!req.body.name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  } else {
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  }
}

function getPeople(req, res) {
  res.json(people);
}

function getPerson(req, res) {
  const id = parseInt(req.params.id);
  const person = people.find((p) => p.id === id);
  if (!person) {
    res.status(404).json({ message: "That id is not present" });
  } else {
    res.status(200).json(person);
  }
}

function updatePerson(req, res) {
  const id = parseInt(req.params.id);
  const name = req.body.name;
  const person = people.find((p) => p.id === id);
  if (!person) {
    res.status(404).json({ message: "That id is not present" });
  } else {
    const newPeople = people.map((p) => {
      if (p.id === id) {
        p.name = name;
      }
      return p;
    });
    res.status(200).json({ success: true, data: newPeople });
  }
}

function deletePerson(req, res) {
  const id = parseInt(req.params.id);
  const updatedPeople = people.filter((p) => p.id !== id);
  res.status(200).json({ success: true, data: updatedPeople });
}

module.exports = {
  addPerson,
  getPeople,
  getPerson,
  updatePerson,
  deletePerson,
};
