import { motion } from "framer-motion";
import { EyeOff } from "lucide-react";

const unseenEfforts = [
  "Showing up tired",
  "Continuing without encouragement",
  "Being responsible too early",
  "Studying despite exhaustion",
  "Being strong without support",
  "Choosing patience when it was hard",
  "Holding space for others while needing space yourself",
  "Making decisions alone",
  "Pursuing growth without validation",
];

const UnseenEffortSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/25 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 mb-8 shadow-golden">
            <EyeOff className="w-9 h-9 text-accent" />
          </div>
          <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
            غير مرئي
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Things That Were Never <span className="italic text-primary">Applauded</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Efforts that went unnoticed, yet shaped who you are
          </p>
        </motion.div>

        {/* Unseen efforts list */}
        <div className="space-y-4 mb-12">
          {unseenEfforts.map((effort, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-6 shadow-soft hover:shadow-golden transition-all duration-500 hover:border-accent/30">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent/60 group-hover:bg-accent transition-colors duration-300" />
                  <p className="font-body text-lg text-foreground/90 leading-relaxed">
                    {effort}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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
              Not everything needs to be witnessed to be rewarded.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnseenEffortSection;

