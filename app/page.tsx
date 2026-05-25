const games = [
  {
    title: "Fortnite",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Minecraft",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Rocket League",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Roblox",
    image:
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between p-6 border-b border-zinc-800">
        <h1 className="text-3xl font-bold text-green-500">
          NebulaPlay
        </h1>

        <div className="flex gap-4">
          <button className="hover:text-green-400">
            Games
          </button>

          <button className="hover:text-green-400">
            Library
          </button>

          <button className="bg-green-500 text-black px-4 py-2 rounded-xl font-semibold">
            Sign In
          </button>
        </div>
      </nav>

      <section className="relative h-[500px] flex items-center px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />

        <img
          src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 max-w-xl">
          <h2 className="text-6xl font-bold mb-6">
            Play Anywhere
          </h2>

          <p className="text-zinc-300 text-lg mb-6">
            Your games instantly in the cloud.
          </p>

          <button className="bg-green-500 text-black px-6 py-3 rounded-2xl text-lg font-bold hover:scale-105 transition">
            Start Playing
          </button>
        </div>
      </section>

      <section className="p-10">
        <h3 className="text-3xl font-bold mb-8">
          Popular Games
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <div
              key={game.title}
              className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-xl"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h4 className="text-2xl font-semibold mb-4">
                  {game.title}
                </h4>

                <button className="w-full bg-green-500 text-black py-3 rounded-xl font-bold hover:bg-green-400">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}