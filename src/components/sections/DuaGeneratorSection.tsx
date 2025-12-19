import { useState } from "react";

type StateKey =
  | "tired"
  | "hopeful"
  | "confused"
  | "grateful"
  | "anxious"
  | "lonely"
  | "stressed"
  | "celebration";

const DUA_MAP: Record<StateKey, { arabic: string; translation: string }> = {
  tired: {
    arabic: "اللهم ارزقها الصبر والقوة",
    translation: "O Allah, grant her patience and strength.",
  },
  hopeful: {
    arabic: "اللهم حقق لها ما تتمنى",
    translation: "O Allah, grant her what she hopes for.",
  },
  confused: {
    arabic: "اللهم اهدها وسدد بصيرتها",
    translation: "O Allah, guide her and steady her insight.",
  },
  grateful: {
    arabic: "اللهم بارك لها فيما أعطاها",
    translation: "O Allah, bless what You have given her.",
  },
  anxious: {
    arabic: "اللهم لا سهل إلا ما جعلته سهلا",
    translation: "O Allah, make what is difficult easy for her.",
  },
  lonely: {
    arabic: "اللهم اجعلها من الرفقاء الصالحين",
    translation: "O Allah, place her among righteous companions.",
  },
  stressed: {
    arabic: "اللهم فرج همها ويسر امرها",
    translation: "O Allah, relieve her worry and ease her affairs.",
  },
  celebration: {
    arabic: "اللهم بارك لها وزدها من فضلك",
    translation: "O Allah, bless her and increase her in Your bounties.",
  },
};

export default function DuaGeneratorSection() {
  const [stateKey, setStateKey] = useState<StateKey>("tired");

  const dua = DUA_MAP[stateKey];

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Duas I Make For You</h1>
      <p className="text-sm text-muted-foreground mb-4">Select how she's feeling and get a gentle, personalized dua (Arabic + translation).</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Current state</label>
          <select
            value={stateKey}
            onChange={(e) => setStateKey(e.target.value as StateKey)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="tired">Feeling tired</option>
            <option value="hopeful">Feeling hopeful</option>
            <option value="confused">Feeling confused</option>
            <option value="grateful">Feeling grateful</option>
          </select>
        </div>

        <div className="bg-white border rounded p-4 shadow-sm">
          <p className="text-xl font-semibold">{dua.arabic}</p>
          <p className="text-sm text-gray-700 mt-2">{dua.translation}</p>
        </div>

        <p className="text-xs text-gray-500">Tip: You can recite this dua with her or save it for a moment of need.</p>
      </div>
    </main>
  );
}
