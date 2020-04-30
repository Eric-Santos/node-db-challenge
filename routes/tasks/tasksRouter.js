const express = require("express");

const Project = require("../projects/project-model");

const router = express.Router();

router.get("/:coconuts", (req, res) => {
  const { coconuts } = req.params;
  console.log(coconuts);
  Project.findAllTasks()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get task", err });
    });
});

// router.get("/:id/tasks", (req, res) => {
//   const { id } = req.params;

//   Project.findTasks(id)
//     .then((tasks) => {
//       if (tasks.length) {
//         res.json(tasks);
//       } else {
//         res
//           .status(404)
//           .json({ message: "Could not find tasks for given project" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Failed to get tasks", err });
//     });
// });

router.post("/addTask", (req, res) => {
  const taskData = req.body;

  Project.addTask(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource", err });
    });
});

module.exports = router;
