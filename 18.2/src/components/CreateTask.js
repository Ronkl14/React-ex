// import React, { useState } from "react";

// const CreateTask = ({ onTaskAddition }) => {
//   const [task, setTask] = useState("");

//   const handleChange = (event) => {
//     setTask(event.target.value);
//   };

//   const handleSubmit = () => {
//     if (task.trim() !== "") {
//       onTaskAddition(task);
//       setTask("");
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={task} onChange={handleChange} />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default CreateTask;

import React, { useState } from "react";

const CreateTask = ({ onTaskAddition }) => {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = () => {
    if (task.trim() !== "") {
      onTaskAddition(task);
      setTask("");
    }
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreateTask;
