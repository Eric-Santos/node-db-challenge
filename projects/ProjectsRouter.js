const express = require("express");

const Project = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Project.find()
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get project", err });
    });
});

module.exports = router;
