// import React from "react";
// import "./Task.css";

// const Task = ({ task, onTaskCheck }) => {
//   const handleTaskCheck = () => {
//     onTaskCheck(task);
//   };

//   return (
//     <div className={`task ${task.done ? "done" : ""}`}>
//       <p>{task.text}</p>
//       <input type="checkbox" checked={task.done} onChange={handleTaskCheck} />
//     </div>
//   );
// };

// export default Task;

// import React from "react";
// import "./Task.css";

// const Task = ({ task, onDelete }) => {
//   const handleDelete = () => {
//     onDelete(task);
//   };

//   return (
//     <div className="task">
//       <p>{task}</p>
//       <input type="checkbox" />
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// };

// export default Task;

import React from "react";
import "./Task.css";

const Task = ({ task, onTaskDeletion }) => {
  const handleDelete = () => {
    onTaskDeletion(task);
  };

  const handleToggle = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const updatedTasks = tasks.map((t) => {
      if (t === task) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <p>{task.text}</p>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
