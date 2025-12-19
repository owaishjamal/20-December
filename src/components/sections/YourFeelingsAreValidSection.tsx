import { motion } from "framer-motion";

const YourFeelingsAreValidSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Your Feelings Are <span className="italic text-primary">Valid</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Distance can feel difficult. That is human. That is okay.
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
          >
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
              It's okay to feel confused sometimes.
              <br />
              Distance can be unclear, and that uncertainty is real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
          >
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
              It's okay to feel lonely sometimes.
              <br />
              Missing connection is natural. It doesn't mean you're weak.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
          >
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
              It's okay to feel uncertain sometimes.
              <br />
              Not knowing what comes next is part of trusting Allah.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
          >
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
              It's even okay to feel upset sometimes.
              <br />
              If distance feels hard, that doesn't mean you're doing something wrong.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 shadow-soft text-center"
        >
          <p className="font-heading text-2xl md:text-3xl text-foreground mb-4 leading-relaxed">
            These feelings don't mean you're failing.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
            They mean you're human.
            <br />
            They mean you care.
            <br />
            They mean you're trying.
          </p>
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
          </div>
          <p className="font-body text-lg text-muted-foreground italic">
            Feel your feelings. Then place them with Allah.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default YourFeelingsAreValidSection;

