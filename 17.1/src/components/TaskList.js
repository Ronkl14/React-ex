import React from "react";
import Task from "./Task";
import CreateTask from "./CreateTask";
import { useState, useEffect } from "react";

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTaskList(storedTasks);
    } else {
      setTaskList(localStorage.setItem("tasks", JSON.stringify([])));
    }
  }, []);

  const handleTaskAddition = (newTaskText) => {
    const newTask = { text: newTaskText, completed: false };
    const updatedTasks = taskList.concat(newTask);
    setTaskList(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleTaskDeletion = (taskToDelete) => {
    const updatedTasks = taskList.filter((t) => t !== taskToDelete);
    setTaskList(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <CreateTask onTaskAddition={handleTaskAddition} />
      {taskList.map((task, index) => (
        <Task key={index} task={task} onTaskDeletion={handleTaskDeletion} />
      ))}
    </div>
  );
};

export default TaskList;
