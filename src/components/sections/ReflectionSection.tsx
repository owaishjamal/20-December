import { useEffect, useState } from "react";

const PROMPTS = [
  "What are you grateful for today?",
  "What did you learn about yourself?",
  "How did you show strength today?",
  "What made you smile today?",
];

const STORAGE = "reflection_entries_v1";

function keyForDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export default function ReflectionSection() {
  const todayKey = keyForDate(new Date());
  const [entries, setEntries] = useState<Record<string, string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(entries));
    } catch {}
  }, [entries]);

  const prompt = PROMPTS[new Date().getDate() % PROMPTS.length];

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Daily Reflection Companion</h1>
      <p className="text-sm text-muted-foreground mb-4">A private space for gentle daily prompts. Saved locally to your browser.</p>

      <div className="mb-3">
        <div className="text-sm text-gray-600 mb-1">Prompt</div>
        <div className="font-medium">{prompt}</div>
      </div>

      <textarea
        value={entries[todayKey] || ""}
        onChange={(e) => setEntries((s) => ({ ...s, [todayKey]: e.target.value }))}
        className="w-full border rounded p-3 min-h-[120px]"
        placeholder="Write something small..."
      />

      <div className="text-sm text-gray-500 mt-2">Saved locally — private to this browser.</div>
    </main>
  );
}
