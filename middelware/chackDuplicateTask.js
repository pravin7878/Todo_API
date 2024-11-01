const fs = require("fs");
const path = require("path");

const checkDuplicateTask = async (req, res, next) => {
  const newTask = req.body;
  const filePath = path.join(__dirname, "../db.json");

  console.log("Checking for duplicate task");

  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const isExistID = data.todos.some((task) => task.id === newTask.id);
    const isExistTitle = data.todos.some(
      (task) => task.title === newTask.title
    );

    if (isExistID || isExistTitle) {
      return res.status(400).json({
        error: "Task already exists",
        message: "Each task must have a unique id and title",
      });
    }

    next(); 
  } catch (error) {
    console.error("Error reading file:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = checkDuplicateTask;
