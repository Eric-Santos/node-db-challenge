const express = require("express");

const Project = require("./project-model.js");

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

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Project.findById(id)
    .then((project) => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get schemes", err });
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
//task routes
router.get("/allTasks", (req, res) => {
  Project.findAllTasks()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get project", err });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;

  Project.findTasks(id)
    .then((tasks) => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: "Could not find tasks for given project" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get tasks", err });
    });
});

router.post("/", (req, res) => {
  const taskData = req.body;

  Project.addTask(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource", err });
    });
});

//resources routes

router.post("/", (req, res) => {
  const resourceData = req.body;

  Project.addResource(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource", err });
    });
});

module.exports = router;
