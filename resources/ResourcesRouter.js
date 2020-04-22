const express = require("express");

const Project = require("./Resources-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Project.find()
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resource", err });
    });
});

module.exports = router;
