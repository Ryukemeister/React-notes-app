import React, { useState } from "react";

function Main() {
  const [tasks, setTasks] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState([]);
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();

    setTasks((prevTaskValue) => [...prevTaskValue, userInput]);
    setUserInput("");
  }

  function deleteTask(e) {
    // console.log(e.target.parentNode.parentNode.children);
    // console.log(t[0].textContent);
    const t = e.target.parentNode.parentNode.children;
    const indexToBeRemoved = tasks.findIndex(
      (task) => task === t[0].textContent
    );

    tasks.splice(indexToBeRemoved, 1);
    setTasks((prevTasks) => {
      return [...prevTasks];
    });
  }

  function completeTask(e) {
    // console.log(e);
    // console.log(e.target);

    const t = e.target.parentNode.parentNode.children;
    const indexToBeRemoved = tasks.findIndex(
      (task) => task === t[0].textContent
    );

    setTasks((prevTasks) => {
      return [...prevTasks];
    });

    const finishedTask = tasks.splice(indexToBeRemoved, 1);

    setTasksCompleted((prevTasksCompleted) => [
      ...prevTasksCompleted,
      ...finishedTask,
    ]);
  }

  const allUserTasks = tasks.map((task) => {
    return (
      <div
        className="flex flex-col bg-yellow-500 text-white mx-10 my-5"
        key={task}
      >
        <h1 className="user-task py-2">{task}</h1>
        <div className="flex gap-4 m-4">
          <button
            className="delete-btn btns px-3 py-2 bg-red-500 rounded-lg"
            onClick={deleteTask}
          >
            Delete task
          </button>
          <button
            className="completed-btn btns px-3 py-2 bg-green-500 rounded-lg"
            onClick={completeTask}
          >
            Mark as completed
          </button>
        </div>
      </div>
    );
  });

  const allUserTasksCompleted = tasksCompleted.map((task) => {
    return (
      <div
        className="container-title bg-green-400 text-white p-4 m-5 rounded-sm"
        key={task}
      >
        {task}
      </div>
    );
  });

  return (
    <main className="flex flex-col">
      <form className="search-bar m-7 px-1 flex border-black border-2 rounded-md">
        <input
          type="text"
          placeholder="What all tasks are you planning to accomplish today..."
          name="tasks"
          className="w-48 border-black px-5 py-1 outline-none"
          onChange={handleChange}
          value={userInput}
        />
        <button className="create-btn btn" onClick={handleClick}>
          Create task
        </button>
      </form>
      <div className="flex flex-wrap">{allUserTasks}</div>
      <div className="tasks-done flex flex-col justify-items-start">
        <h1>All user tasks done</h1>
        <div className="tasks flex"> {allUserTasksCompleted}</div>
      </div>
    </main>
  );
}

export default Main;
