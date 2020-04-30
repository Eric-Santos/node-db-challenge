const express = require("express");

const Project = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  Project.findAllProjects()
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get project", err });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  Project.addProject(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project", err });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Project.findById(id)
    .then((project) => {
      if (project) {
        Project.update(id, changes).then((updatedProject) => {
          res.json(updatedProject);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update project", err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Project.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete project", err });
    });
});

module.exports = router;
