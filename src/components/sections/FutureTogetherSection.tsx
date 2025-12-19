export default function FutureTogetherSection() {
  const items = [
    "A home filled with peace (insha'Allah)",
    "Mornings starting with salah together",
    "Evenings of quiet companionship",
    "Supporting each other's growth",
    "Cute little daughters we teach deen together, while we keep learning too",
  ];

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Future Together (gentle vision)</h1>
      <p className="text-sm text-muted-foreground mb-4">A hopeful, respectful vision of nikah life framed gently.</p>

      <ul className="space-y-3">
        {items.map((t, i) => (
          <li key={i} className="border rounded p-3 bg-white">{t}</li>
        ))}
      </ul>
    </main>
  );
}
