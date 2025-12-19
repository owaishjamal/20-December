import { useEffect, useState } from "react";

type Plant = { id: string; name: string; level: number };
const STORAGE = "garden_v1";

const DEFAULT: Plant[] = [
  { id: "p1", name: "Patience", level: 1 },
  { id: "p2", name: "Kindness", level: 2 },
  { id: "p3", name: "Courage", level: 1 },
];

export default function GrowthGardenSection() {
  const [plants, setPlants] = useState<Plant[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      return raw ? JSON.parse(raw) : DEFAULT;
    } catch {
      return DEFAULT;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(plants));
    } catch {}
  }, [plants]);

  function grow(id: string) {
    setPlants((p) => p.map((pl) => (pl.id === id ? { ...pl, level: Math.min(5, pl.level + 1) } : pl)));
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Your Growth Garden</h1>
      <p className="text-sm text-muted-foreground mb-6">Tap a plant to help it grow. Each plant represents a milestone or quality.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {plants.map((pl) => (
          <div key={pl.id} className="border rounded p-4 bg-white text-center">
            <div className="text-lg font-medium">{pl.name}</div>
            <div className="text-sm text-gray-600 mt-2">Level {pl.level}</div>
            <div className="mt-3">
              <button onClick={() => grow(pl.id)} className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                Nurture
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
