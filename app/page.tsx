export default function Home() {
  const games = [
    "Fortnite",
    "Minecraft",
    "Rocket League",
    "Roblox",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white p-8">
      <h1 className="text-5xl font-bold mb-8">
       Vortex Gaming
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {games.map((game) => (
          <div
            key={game}
            className="bg-zinc-900 p-6 rounded-2xl hover:scale-105 transition"
          >
            <h2 className="text-2xl font-semibold">
              {game}
            </h2>

            <button className="mt-4 bg-green-500 px-4 py-2 rounded-xl">
              Play
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}