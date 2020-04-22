const express = require("express");

const Project = require("./Tasks-Model");

const router = express.Router();

router.get("/", (req, res) => {
  Project.find()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get task", err });
    });
});

module.exports = router;
