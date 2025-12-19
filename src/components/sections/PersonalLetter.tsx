import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Lock, Unlock } from "lucide-react";

interface PersonalLetterProps {
  hasScrolledToEnd: boolean;
}

const PersonalLetter = ({ hasScrolledToEnd }: PersonalLetterProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (hasScrolledToEnd) {
      setIsVisible(true);
    }
  }, [hasScrolledToEnd]);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  if (!isVisible) return null;

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-10 md:p-14 shadow-soft">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6"
                >
                  <Lock className="w-8 h-8 text-accent" />
                </motion.div>
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                  Final Note
                </h3>
                <p className="font-body text-muted-foreground mb-8">
                  You've reached the end of this page.
                </p>
                <button
                  onClick={handleUnlock}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 hover:shadow-soft font-body"
                >
                  <Unlock className="w-4 h-4" />
                  <span>Read the final note</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 md:p-14 shadow-soft"
            >
              <div className="space-y-6 text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-body text-lg text-muted-foreground leading-relaxed"
                >
                  This page was written slowly, with care.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-body text-lg text-muted-foreground leading-relaxed"
                >
                  Not to bind you, but to acknowledge you.
                </motion.p>
                
                <div className="flex items-center justify-center gap-4 my-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/40" />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="font-heading text-xl md:text-2xl text-foreground leading-relaxed"
                >
                  Ayesha, I care deeply for you.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
                >
                  But I will care for you even more as a wife, insha'Allah.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
                >
                  I will cherish every part of you as a husband, insha'Allah.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="font-heading text-xl md:text-2xl text-primary leading-relaxed"
                >
                  And I will be that husband, insha'Allah.
                </motion.p>

                <div className="flex items-center justify-center gap-4 my-8">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
                >
                  Meanwhile, become the best wife for me.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
                >
                  Practice everything you wish to be after nikah.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
                >
                  Grow into who you want to become.
                </motion.p>

                <div className="flex items-center justify-center gap-4 my-8">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="font-heading text-xl md:text-2xl text-primary leading-relaxed"
                >
                  And I promise you this:
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
                >
                  I will be the best version of myself for you
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
                >
                  from this second, this hour,
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="font-heading text-xl md:text-2xl text-primary leading-relaxed"
                >
                  until the end of this eternity.
                </motion.p>

                <div className="flex items-center justify-center gap-4 my-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/40" />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                  className="font-body text-lg text-foreground/90 leading-relaxed"
                >
                  Your journey is your own. This page exists simply to recognize the strength it took to walk it.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="font-body text-lg text-foreground/90 leading-relaxed"
                >
                  May Allah grant you ease, peace, and everything that is best for you.
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PersonalLetter;

