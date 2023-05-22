"use client"
import TaskList from "./TaskList";

export default function Home() {
  return (
    <main>
      <div className="bg-gray-800 min-h-screen pt-16">
        <TaskList/>
      </div>
    </main>
  );
}
