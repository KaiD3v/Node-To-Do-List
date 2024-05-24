const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/TaskController");

router.post("/add", TaskController.createTaskSave);
router.post("/remove", TaskController.removeTask);
router.get("/edit/:id", TaskController.updateTask);
router.get("/add", TaskController.createTask);
router.post("/edit", TaskController.updateTaskPost);
router.post("/updatestatus", TaskController.toggleTaskStatus);
router.get("/", TaskController.showTasks);

module.exports = router;
