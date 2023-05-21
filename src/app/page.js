"use client"

import TaskInput from "./TaskInput";

export default function Home() {
  const handleAddTask = (taskText) => {
    // Handle adding the task to your array or perform any desired action
    console.log('New task:', taskText);
  };

  return (
    <main>
      <div className="bg-gray-800 min-h-screen pt-16">
        <TaskInput onAddTask={handleAddTask}/>
      </div>
    </main>
  );
}
