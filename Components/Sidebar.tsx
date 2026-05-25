export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-950 p-6 border-r border-zinc-800">
      <h2 className="text-2xl font-bold text-green-500 mb-8">
        Cloud Gaming
      </h2>

      <div className="space-y-4">
        <button className="block w-full text-left hover:text-green-400">
          Home
        </button>

        <button className="block w-full text-left hover:text-green-400">
          Library
        </button>

        <button className="block w-full text-left hover:text-green-400">
          Settings
        </button>
      </div>
    </aside>
  );
}