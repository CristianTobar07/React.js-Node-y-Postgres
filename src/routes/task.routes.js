
const { Router } = require("express");
const {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controllers");


const router = Router();

router.post("/tasks", createTask);

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);



module.exports = router;