const express = require("express");

const app = express();

app.use(express.json());

let tasks = [
    {id: 1, title: "Learn React", completed: false}
];

app.get("/api/tasks",  (req, res) => {
    res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
    const {title} = req.body;

    if (!title || title.trim()) {
        return res.status(400).json({
            message: "Task title is required"
        });
    }

    const task = {
        id: Date.now(),
        title: title.trim(),
        completed:false
    };

    tasks.push(task);
    res.status(201).json(task);
});


app.delete("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const exists = tasks.some(task => task.id === id);

    if (!exists) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    tasks = tasks.filter(task => task.id !== id);
    res.json({message: "Task deleted successfully"});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});