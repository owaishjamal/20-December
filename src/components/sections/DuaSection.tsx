import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, ChevronRight, ChevronLeft } from "lucide-react";

const duas = [
  "May Allah reward every unseen struggle you have faced",
  "May Allah replace every hardship with ease",
  "May Allah grant peace for what was endured silently",
  "May Allah elevate you for every step taken with sincerity",
  "May Allah protect you from every harm, seen and unseen",
  "May Allah grant you success in this world and the ākhirah",
];

const DuaSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDimmed, setIsDimmed] = useState(true);

  const nextDua = () => {
    if (currentIndex < duas.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsDimmed(true);
      setTimeout(() => setIsDimmed(false), 300);
    }
  };

  const prevDua = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsDimmed(true);
      setTimeout(() => setIsDimmed(false), 300);
    }
  };

  return (
    <section className="relative py-32 px-6 min-h-[600px]">
      {/* Dimmed background when dua is visible */}
      <motion.div
        animate={{ opacity: isDimmed ? 0.3 : 0.1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none"
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
            الدعاء
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Duʿāʾ Focus <span className="italic text-accent">Mode</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Each prayer appears one at a time, to be read with intention
          </p>
        </motion.div>

        {/* Interactive Dua Display */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="bg-card/90 backdrop-blur-md border border-border/50 rounded-3xl p-10 md:p-14 shadow-golden text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                  {duas[currentIndex]}
                </p>
                <p className="font-body text-sm text-muted-foreground italic">
                  This duʿāʾ was written with sincerity.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prevDua}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-card/50 hover:shadow-soft"
            }`}
            aria-label="Previous duʿāʾ"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <div className="flex gap-2">
            {duas.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsDimmed(true);
                  setTimeout(() => setIsDimmed(false), 300);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to duʿāʾ ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextDua}
            disabled={currentIndex === duas.length - 1}
            className={`p-3 rounded-full transition-all duration-300 ${
              currentIndex === duas.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-card/50 hover:shadow-soft"
            }`}
            aria-label="Next duʿāʾ"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="text-center mt-6">
          <p className="font-body text-sm text-muted-foreground">
            {currentIndex + 1} of {duas.length}
          </p>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 font-arabic text-2xl text-primary/70"
        >
          آمين يا رب العالمين
        </motion.p>
      </div>
    </section>
  );
};

export default DuaSection;
