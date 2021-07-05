const express = require("express");

const Resource = require("../resources/resource-model");

const router = express.Router();

router.get("/", (req, res) => {
  Resource.find()
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get all resources", err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Resource.findById(id)
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

// router.get("/:id/ProjectResources", (req, res) => {
//   const { id } = req.params;

//   Resource.findProjectResourcesById(id)
//     .then((resource) => {
//       if (resource.length) {
//         res.json(resource);
//       } else {
//         res
//           .status(404)
//           .json({ message: "Could not find resources for given project" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Failed to get resources", err });
//     });
// });

router.post("/", (req, res) => {
  const resourceData = req.body;

  Resource.add(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource", err });
    });
});

module.exports = router;
