import { useEffect, useState } from "react";

type Moment = {
  id: string;
  title: string;
  preview: string;
  full: string;
};

const STORAGE_KEY = "moments_v1";

const defaultMoments: Moment[] = [
  {
    id: "m1",
    title: "Patience with family",
    preview: "Patience with everyone, especially at home",
    full: "Your patience with everyone, especially in the house, shows a gentle strength — you make home feel safe and calm.",
  },
  {
    id: "m2",
    title: "Caring even when unreciprocated",
    preview: "You care for others even if they don't",
    full: "You care for others even when the other person doesn't — that selfless kindness is one of the most beautiful things about you.",
  },
  {
    id: "m3",
    title: "Quiet perseverance",
    preview: "Hard work doesn't stop regardless of your state",
    full: "You keep working, even when you're tired or uncertain — your dedication inspires me every day.",
  },
  {
    id: "m4",
    title: "Patience with Ammi",
    preview: "The way you handle Ammi with patience",
    full: "The way you handle Ammi with patience — I notice the small kindnesses and the extra care you give.",
  },
];

export default function MomentsSection() {
  const [moments, setMoments] = useState<Moment[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultMoments;
    } catch {
      return defaultMoments;
    }
  });

  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(moments));
    } catch {}
  }, [moments]);

  function toggleFlip(id: string) {
    setFlipped((s) => ({ ...s, [id]: !s[id] }));
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Moments I've Noticed</h1>
      <p className="text-sm text-muted-foreground mb-6">Small, gentle observations to make her feel truly seen.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {moments.map((m) => (
          <button
            key={m.id}
            onClick={() => toggleFlip(m.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleFlip(m.id);
            }}
            className="relative rounded-lg bg-white border p-4 text-left shadow-sm hover:shadow-md focus:outline-none focus:ring w-full h-36 overflow-hidden"
            aria-pressed={!!flipped[m.id]}
          >
            <div className={`transform transition-transform ${flipped[m.id] ? "rotate-y-180" : ""}`}>
              {!flipped[m.id] ? (
                <div>
                  <h3 className="font-medium">{m.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{m.preview}</p>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-800">{m.full}</p>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {moments.length === 0 && <p className="mt-6 text-center text-gray-500">No moments yet — add some from your heart.</p>}
    </main>
  );
}
