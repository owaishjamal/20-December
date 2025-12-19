import { motion } from "framer-motion";

const WhatsAheadSection = () => {
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
          <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
            المستقبل
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            What's <span className="italic text-primary">Ahead</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            A gentle vision of what comes after distance. No pressure, just peace.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-10 shadow-soft"
          >
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-4">
              When Allah allows nikah, it will come at the right time.
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Not rushed. Not forced. Not pressured.
              <br />
              Simply when Allah's timing aligns with what is best.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-10 shadow-soft"
          >
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-4">
              We will have built something strong.
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              A foundation built on patience, trust, and obedience to Allah.
              <br />
              Something that can last because it started right.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-10 shadow-soft"
          >
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-4">
              Everything will be halal and peaceful.
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              No guilt. No confusion. No rushing.
              <br />
              Just peace, clarity, and the blessing of doing things the right way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-10 shadow-soft"
          >
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-4">
              You will have had time to grow.
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Time to focus on yourself, your deen, your peace.
              <br />
              Time to become who you're meant to be, without pressure.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 shadow-soft text-center"
        >
          <p className="font-heading text-2xl md:text-3xl text-foreground mb-4 leading-relaxed">
            This distance is not forever.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
            It is purposeful. It is temporary. It is for Allah.
            <br />
            And what is done for Allah never goes to waste.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAheadSection;

