import { motion } from "framer-motion";

const ClosingSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-secondary/40 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-pulse-soft animation-delay-500" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* A respectful intention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
            النية
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            A Respectful <span className="italic text-primary">Intention</span>
          </h2>

          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-10 shadow-soft">
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              You are free to choose your path.
              <br />
              Free to grow.
              <br />
              Free to become whoever you wish to be.
            </p>
            
            <div className="flex items-center justify-center gap-4 my-6">
              <div className="h-px w-12 bg-accent/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              <div className="h-px w-12 bg-accent/30" />
            </div>

            <p className="font-body text-muted-foreground leading-relaxed">
              May Allah guide you, protect you, and grant you what is best for you — in this world and the next.
            </p>
          </div>
        </motion.div>

        {/* Final note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
            <div className="w-3 h-3 rounded-full border-2 border-accent/60" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
          </div>

          <p className="font-body text-lg text-muted-foreground mb-8">
            This recognition comes from <span className="text-primary">respect</span>, not expectation.
            <br />
            From <span className="text-primary">gratitude</span>, not attachment.
          </p>

          {/* Main closing text */}
          <p className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-relaxed mb-8">
            This page exists{" "}
            <span className="italic text-primary">without occasion</span>.
          </p>

          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-12">
            Because sincerity does not require a reason.
          </p>

          {/* Final Arabic blessing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="font-arabic text-3xl md:text-4xl text-primary/80">
              بارك الله فيكِ يا عائشة
            </p>
            <p className="font-body text-sm text-muted-foreground uppercase tracking-widest">
              May Allah bless you, Ayesha
            </p>
          </motion.div>

          {/* Bottom decorative line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12 bg-accent/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
            <div className="h-px w-12 bg-accent/30" />
          </motion.div>
        </motion.div>

        {/* Silent Support footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 text-center space-y-3"
        >
          <p className="font-body text-lg text-foreground/80 italic">
            Some pages are not meant to be shared.
          </p>
          <p className="font-body text-lg text-foreground/80 italic">
            Some support is meant to be quiet.
          </p>
          <div className="pt-4">
            <p className="font-body text-sm text-muted-foreground/60">
              Written with taqwa and sincere intention
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
