const express = require("express");

const ProjectsRouter = require("./projects/projectsRouter.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello world!");
});

server.use("/projects", ProjectsRouter);

module.exports = server;
