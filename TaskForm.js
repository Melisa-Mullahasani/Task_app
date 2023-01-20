import React from "react";

const TaskForm = ({ handleSubmit, task, editId, setTask }) => {
  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit"> {editId ? "Edit" : "Go"}</button>
    </form>
  );
};

export default TaskForm;
