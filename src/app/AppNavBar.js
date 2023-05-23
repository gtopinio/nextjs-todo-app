export default function AppNavBar() {
    return (
      <div>
        <nav className="bg-cyan-950">
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-start">
            <button className="rounded-3xl px-4 py-2 bg-cyan-600 hover:bg-cyan-700">
              <span className="text-white text-lg font-bold">Simple To-Do List</span>
            </button>
          </div>
        </nav>
      </div>
    );
  }
  