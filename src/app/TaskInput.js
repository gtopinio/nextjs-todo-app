import React, { useState } from "react";

export default function TaskInput({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
    console.log(taskText);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      onAddTask(taskText);
      setTaskText("");
    }
  };

  return (
<div className="flex justify-center">
  <div className="relative">
    <input
      type="text"
      placeholder="Add tasks here..."
      className="px-4 py-2 w-96 bg-gray-100 rounded-3xl border-2 border-gray-300 focus:outline-none focus:border-blue-500"
      value={taskText}
      onChange={handleInputChange}
    />
  </div>
  <button
    className="ml-4 px-6 py-2 bg-green-700 text-white rounded-3xl"
    onClick={handleAddTask}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M7 9V4H9V9H14V11H9V16H7V11H2V9H7Z"
      />
    </svg>
  </button>
</div>

  );
}
