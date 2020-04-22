const express = require("express");

const ProjectsRouter = require("./projects/projectsRouter.js");
const TaskRouter = require("./tasks/TasksRouter");
const ResourceRouter = require("./resources/ResourcesRouter");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello world!");
});

server.use("/projects", ProjectsRouter);
server.use("/tasks", TaskRouter);
server.use("/resources", ResourceRouter);

module.exports = server;
