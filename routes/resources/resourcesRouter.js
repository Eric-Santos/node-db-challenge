const express = require("express");

const Resource = require("../projects/project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Resource.findAllResources()
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get all resources", err });
    });
});

router.get("/:id/resources", (req, res) => {
  const { id } = req.params;

  Resource.findResourcesById(id)
    .then((resource) => {
      if (resource.length) {
        res.json(resource);
      } else {
        res
          .status(404)
          .json({ message: "Could not find resources for given project" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resources", err });
    });
});

router.post("/", (req, res) => {
  const resourceData = req.body;

  Resource.addResource(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource", err });
    });
});

module.exports = router;
