import { useEffect, useState } from "react";

type Letter = { id: string; title: string; body: string };
const STORAGE = "letters_unlocked_v1";

const DEFAULT: Letter[] = [
  { id: "l1", title: "Tired", body: "You are my most cutest and most hard working baby. Take rest and come back stronger." },
  { id: "l2", title: "Strong", body: "You inspire me — your strength steadies my heart." },
  { id: "l3", title: "Confused", body: "Pray, seek Allah's guidance and remember you are my favourite person." },
  { id: "l4", title: "Grateful", body: "Thank Allah for every small mercy — and know I am grateful for you." },
  { id: "l5", title: "Doubt", body: "When doubt arrives, remember your past victories and that I'm beside you." },
  { id: "l6", title: "Ache", body: "If you ache, it's okay to pause — your feelings are valid and I'm holding them with you." },
  { id: "l8", title: "Comfort", body: "When you need comfort: Breathe, rest, and let love carry you for a while." },
];

export default function LettersSection() {
  const [unlocked, setUnlocked] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(unlocked));
    } catch {}
  }, [unlocked]);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Letters for Different Days</h1>
      <p className="text-sm text-muted-foreground mb-6">Small locked letters for specific moods — unlock gently when the moment matches.</p>

      <div className="space-y-4">
        {DEFAULT.map((l) => (
          <div key={l.id} className="border rounded p-4 bg-white">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{l.title}</h3>
              {!unlocked[l.id] ? (
                <button
                  className="text-sm text-blue-600"
                  onClick={() => setUnlocked((s) => ({ ...s, [l.id]: true }))}
                >
                  Unlock
                </button>
              ) : (
                <span className="text-xs text-green-600">Unlocked</span>
              )}
            </div>

            {unlocked[l.id] ? <p className="mt-3 text-gray-700">{l.body}</p> : <p className="mt-3 text-gray-500">This letter is locked — unlock when it feels right.</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
