const express = require("express");

const Task = require("./tasks-model");

const router = express.Router();

router.get("/", (req, res) => {
  Task.find()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get task", err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Task.findById(id)
    .then((task) => {
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ message: "Could not find task with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get task", err });
    });
});

router.post("/addTask", (req, res) => {
  const taskData = req.body;

  Project.add(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource", err });
    });
});

module.exports = router;
