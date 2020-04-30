const express = require("express");

const ProjectsRouter = require("./routes/projects/ProjectsRouter");
const TasksRouter = require("./routes/tasks/tasksRouter");
const ResourceRouter = require("./routes/resources/resourcesRouter");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello world!");
});
//create routes for resources and tasks
server.use("/projects", ProjectsRouter);
server.use("/tasks", TasksRouter);
server.use("/resources", ResourceRouter);

module.exports = server;
