import { motion } from "framer-motion";
import { Eye, Heart } from "lucide-react";

const AppreciationSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 mb-8 shadow-golden">
            <Eye className="w-9 h-9 text-accent" />
          </div>

          <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
            التقدير
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            A Note of <span className="italic text-primary">Appreciation</span>
          </h2>
        </motion.div>

        {/* Main appreciation card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 rounded-3xl blur-sm" />
          
          <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-10 md:p-14 shadow-soft">
            <div className="space-y-8 text-center">
              <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">
                Strength does not always look loud.
              </p>
              
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                Sometimes it looks like showing up every day without acknowledgment.
              </p>

              <div className="flex items-center justify-center gap-4 py-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
                <Heart className="w-5 h-5 text-accent/60" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
              </div>

              <div className="space-y-4">
                <p className="font-body text-lg text-foreground/80">
                  This page is a reminder that such effort is <span className="text-primary font-medium">seen</span>.
                </p>
                <p className="font-body text-lg text-foreground/80">
                  That resilience <span className="text-primary font-medium">matters</span>.
                </p>
                <p className="font-body text-lg text-foreground/80">
                  That patience is <span className="text-accent font-medium">never wasted</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ayesha personal note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-heading text-2xl md:text-3xl text-foreground mb-4">
            Ayesha,
          </p>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            You have walked through more than most will ever understand, yet you did it with grace, with strength, and with sincerity. 
            <br /><br />
            <span className="text-foreground/80 italic">That is not ordinary. That is exceptional.</span>
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-xl md:text-2xl text-primary mt-6"
          >
            On this special day, know that you are deeply, deeply appreciated.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppreciationSection;
