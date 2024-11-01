const express = require("express");
const fs = require("fs");
const dataValidator = require("./middelware/dataValidater");
const chackDuplicateTask = require("./middelware/chackDuplicateTask");
const chackID = require("./middelware/chackID");

const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("wellcome to server");
});

// get the all todos
app.get("/todos", async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    res.status(200).json(data);
  } catch (error) {
    console.log("error while fatching data", error);
    res.status(400).json({ error: "Internal server erroor" });
  }
});

// get the singal todos
app.get("/todos/:id",chackID, async (req, res) => {
  const { id } = req.params;
  try {
    const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    const matchData = data.todos.filter((task) => task.id === +id);
    if (matchData.length !== 0) {
      res.status(200).json(matchData);
    } else {
      res.status(200).json({ massege: "data not found" });
    }
  } catch (error) {
    console.log("error white geting data", error);
    res.status(404).json({ error: "data not found" });
  }
});

// for adding new todos
app.post("/add-todo", [dataValidator, chackDuplicateTask], async (req, res) => {
  const newTask = req.body;
  try {
    const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    data.todos.push(newTask);
    console.log(data);

    fs.writeFileSync("db.json", JSON.stringify(data));
    res.status(201).json({ massege: "Task added success" });
  } catch (error) {
    console.log("error while adding new task", error);
  }
});

// for updating task
app.patch("/edit-todo/:id", [chackDuplicateTask,chackID], async (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;
  console.log(+id);

  try {
    const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    const updatedTodos = data.todos.map((task) => {
      if (task.id === +id) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    fs.writeFileSync("db.json", JSON.stringify({ todos: updatedTodos }));
    res.status(202).json({ massege: "task updated succes" });
  } 
  catch (error) {
    console.log("error while updating task", error);
    res.status(404).json({ error: "data not match" });
  }
});

// for remove task
app.delete("/remove-todo/:id",chackID, async (req, res) => {
    const {id} = req.params
  try {
    const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    const updatedTodos = data.todos.filter((task) => task.id !== +id);
    console.log(updatedTodos);
    
    fs.writeFileSync("db.json", JSON.stringify({ todos: updatedTodos }));
    res.json({"massege" : `task id : ${id} is removed success`})
  } catch (error) {
    console.log("error while updating task" ,error);
    res.status(400).json({ error: "ID not match" });
  }
});

app.listen(port, () => {
  console.log(`server is runing on http://localhost:${port}`);
});
