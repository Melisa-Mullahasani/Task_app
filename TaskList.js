import React from "react";

const TaskList = ({ tasks, handleDelete, handleEdit }) => {
  return (
    <ul className="allTasks">
      {tasks.map((t) => (
        <li className="singleTask">
          <span className="taskText" key={t.id}>
            {t.task}
          </span>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;