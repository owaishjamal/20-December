import MomentsSection from "@/components/sections/MomentsSection";
import DuaGeneratorSection from "@/components/sections/DuaGeneratorSection";
import LettersSection from "@/components/sections/LettersSection";
import GrowthGardenSection from "@/components/sections/GrowthGardenSection";
import FutureTogetherSection from "@/components/sections/FutureTogetherSection";
import ReflectionSection from "@/components/sections/ReflectionSection";
import { useState } from "react";

const TABS = [
  { id: "moments", label: "Moments" },
  { id: "dua", label: "Duas" },
  { id: "letters", label: "Letters" },
  { id: "garden", label: "Garden" },
  { id: "future", label: "Future" },
  { id: "reflection", label: "Reflection" },
];

export default function MiscellaneousSection() {
  const [tab, setTab] = useState<string>(TABS[0].id);

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Miscellaneous</h1>
      <p className="text-sm text-muted-foreground mb-4">A single place for small, caring interactions — duas, letters, moments and more.</p>

      <div className="flex gap-2 mb-4 flex-wrap">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-1 rounded ${tab === t.id ? "bg-blue-600 text-white" : "bg-gray-100"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <section className="space-y-6">
        {tab === "moments" && <MomentsSection />}
        {tab === "dua" && <DuaGeneratorSection />}
        {tab === "letters" && <LettersSection />}
        {tab === "garden" && <GrowthGardenSection />}
        {tab === "future" && <FutureTogetherSection />}
        {tab === "reflection" && <ReflectionSection />}
      </section>
    </main>
  );
}
