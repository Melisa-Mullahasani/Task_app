import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTask = tasks.find((i) => i.id === editId);
      const updatedTasks = tasks.map((t) =>
        t.id === editTask.id
          ? (t = { id: t.id, task })
          : { id: t.id, task: t.task }
      );
      setTasks(updatedTasks);
      setEditId(0);
      setTask("");
      return;
    }

    if (task !== "") {
      setTasks([{ id: `${task}-${Date.now()}`, task }, ...tasks]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks([...deleteTask]);
  };

  const handleEdit = (id) => {
    const editTask = tasks.find((i) => i.id === id);
    setTask(editTask.task);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My Task List</h1>
        <TaskForm
          handleSubmit={handleSubmit}
          task={task}
          editId={editId}
          setTask={setTask}
        />

        <TaskList
          tasks={tasks}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;