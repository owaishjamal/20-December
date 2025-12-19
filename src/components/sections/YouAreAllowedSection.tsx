import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const allowedStatements = [
  "You are allowed to rest.",
  "You are allowed to grow at your pace.",
  "You are allowed to change.",
  "You are allowed to hope.",
  "You are allowed to take your time.",
  "You are allowed to say no.",
  "You are allowed to prioritize yourself.",
  "You are allowed to be imperfect.",
  "You are allowed to feel confused.",
  "You are allowed to take space.",
  "You are allowed to focus on yourself.",
  "You are allowed to trust the process.",
  "You are allowed to feel your feelings.",
  "You are allowed to not have all the answers.",
];

const YouAreAllowedSection = () => {
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());

  const toggleReveal = (index: number) => {
    const newRevealed = new Set(revealedIndices);
    if (newRevealed.has(index)) {
      newRevealed.delete(index);
    } else {
      newRevealed.add(index);
    }
    setRevealedIndices(newRevealed);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
            الإذن
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            You Are <span className="italic text-primary">Allowed</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Tap each line to reveal. These are affirmations, not demands.
          </p>
        </motion.div>

        {/* Interactive statements */}
        <div className="space-y-4 mb-12">
          {allowedStatements.map((statement, index) => {
            const isRevealed = revealedIndices.has(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => toggleReveal(index)}
              >
                <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-6 shadow-soft hover:shadow-golden transition-all duration-500 hover:border-accent/30">
                  <AnimatePresence mode="wait">
                    {isRevealed ? (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="font-body text-lg md:text-xl text-foreground leading-relaxed"
                      >
                        {statement}
                      </motion.p>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-300" />
                        <p className="font-body text-muted-foreground italic">
                          Tap to reveal
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10 shadow-soft">
            <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">
              Patience does not mean pressure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouAreAllowedSection;

