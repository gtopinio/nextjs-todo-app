import React, { useState, useEffect } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    const allTasks = [];

    setTasks(allTasks);
  }, []);

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
    console.log(taskText);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        title: taskText,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      console.log('New task:', newTask);
      setTaskText('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-gray-800 min-h-screen pt-16">
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
          onClick={() => {
            handleAddTask();
          }}
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

      <div className="bg-white rounded-lg p-4 mt-4 max-w-md mx-auto">
        <h2 className="text-lg font-bold mb-4">Task List</h2>
        {tasks.length > 0 ? (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between bg-gray-100 rounded-md p-2"
              >
                <span>{task.title}</span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
}
