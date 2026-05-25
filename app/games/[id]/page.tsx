export default function GamePage({ params }: any) {
  return (
    <div className="p-8 text-white">
      <h1>Game Page Loaded</h1>

      <p>
        Param ID: {params?.id ?? "BROKEN ROUTE"}
      </p>
    </div>
  );
}