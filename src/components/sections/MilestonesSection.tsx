import { useEffect, useState } from "react";

type Milestone = { id: string; title: string; note: string };
const DEFAULT: Milestone[] = [
  { id: "ms1", title: "Completed BPT", note: "You completed BPT — celebrate the effort." },
  { id: "ms2", title: "One year of patience", note: "You showed up with patience for X years." },
  { id: "ms3", title: "Daily consistency", note: "You've shown up every day — that's progress." },
];

const STORAGE = "milestones_done_v1";

export default function MilestonesSection() {
  const [done, setDone] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(done));
    } catch {}
  }, [done]);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Milestone Celebration</h1>
      <p className="text-sm text-muted-foreground mb-6">Tap a milestone to reveal a gentle celebration and mark it done.</p>

      <div className="space-y-4">
        {DEFAULT.map((m) => (
          <div key={m.id} className="border rounded p-4 bg-white flex items-start justify-between">
            <div>
              <div className="font-medium">{m.title}</div>
              <div className="text-sm text-gray-600 mt-1">{done[m.id] ? m.note : "Tap to celebrate"}</div>
            </div>
            <div>
              <button
                onClick={() => setDone((s) => ({ ...s, [m.id]: !s[m.id] }))}
                className={`px-3 py-1 rounded text-sm ${done[m.id] ? "bg-green-600 text-white" : "bg-blue-600 text-white"}`}
              >
                {done[m.id] ? "Unmark" : "Celebrate"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
