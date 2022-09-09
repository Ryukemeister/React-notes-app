import React, { useState, useEffect } from "react";

function Main() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [tasksCompleted, setTasksCompleted] = useState(
    JSON.parse(localStorage.getItem("tasksCompleted")) || []
  );
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("tasksCompleted", JSON.stringify(tasksCompleted));
  }, [tasksCompleted]);

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

    const t = e.target.parentNode.parentNode.children;
    const indexToBeRemoved = tasks.findIndex(
      (task) => task === t[0].textContent
    );

    const finishedTask = tasks.splice(indexToBeRemoved, 1);

    setTasks((prevTasks) => {
      return [...prevTasks];
    });

    setTasksCompleted((prevTasksCompleted) => [
      ...prevTasksCompleted,
      ...finishedTask,
    ]);
  }

  const allUserTasks = tasks.map((task) => {
    return (
      <div
        className="flex flex-col bg-yellow-500 h-52 w-80 max-w-md rounded-lg text-white mx-10 my-5 items-start"
        key={task}
      >
        <div>
          <h1 className="user-task py-2 px-4 text-3xl text-left">{task}</h1>
        </div>
        <div className="flex gap-4 m-3">
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
        className="container-title bg-green-500 text-white p-4 m-5 rounded-sm"
        key={task}
      >
        {task}
      </div>
    );
  });

  return (
    <main className="flex flex-col items-start">
      <form className="search-bar m-7 px-1 flex border-black border-2 rounded-md">
        <input
          type="text"
          placeholder="What all tasks are you planning to accomplish today..."
          name="tasks"
          className="w-96 px-2 py-1 outline-none"
          onChange={handleChange}
          value={userInput}
        />
        <button
          className="bg-yellow-500 px-4 py-1 rounded-mg mx-3 my-2"
          onClick={handleClick}
        >
          Create task
        </button>
      </form>
      <div className="flex flex-wrap">{allUserTasks}</div>
      <div className="tasks-done flex flex-col items-start mx-4">
        <h1>All user tasks done</h1>
        <div className="tasks flex flex-wrap"> {allUserTasksCompleted}</div>
      </div>
    </main>
  );
}

export default Main;
