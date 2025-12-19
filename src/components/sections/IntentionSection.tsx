import { motion } from "framer-motion";
import { Shield, Sparkles } from "lucide-react";

const IntentionSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 mb-8 shadow-golden">
            <Shield className="w-9 h-9 text-primary" />
          </div>

          {/* Header */}
          <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
            النية
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            An <span className="italic text-primary">Intention</span>
          </h2>
        </motion.div>

        {/* The intention card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-12"
        >
          {/* Decorative border */}
          <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 via-primary/20 to-accent/30 rounded-3xl blur-sm" />
          
          <div className="relative bg-card border border-border/50 rounded-3xl p-10 md:p-14 shadow-soft">
            {/* Decorative corner elements */}
            <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-accent/40 rounded-tl-lg" />
            <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-accent/40 rounded-tr-lg" />
            <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-accent/40 rounded-bl-lg" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-accent/40 rounded-br-lg" />

            <p className="font-body text-xl md:text-2xl text-foreground/90 leading-relaxed text-center">
              To always keep{" "}
              <span className="text-primary font-medium">respect</span>,{" "}
              <span className="text-primary font-medium">dignity</span>, and{" "}
              <span className="text-primary font-medium">boundaries</span> intact,
              <br className="hidden md:block" />
              and to never place emotions above{" "}
              <span className="text-accent font-medium">obedience to Allah</span>.
            </p>

            <div className="flex items-center justify-center gap-3 mt-8">
              <Sparkles className="w-4 h-4 text-accent/60" />
              <span className="font-arabic text-lg text-muted-foreground">
                إِنَّ اللَّهَ مَعَ الصَّابِرِينَ
              </span>
              <Sparkles className="w-4 h-4 text-accent/60" />
            </div>
          </div>
        </motion.div>

        {/* Quiet deed section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
            A Quiet <span className="italic text-accent">Good Deed</span>
          </h3>
          <p className="font-body text-muted-foreground max-w-lg mx-auto leading-relaxed">
            A good deed done quietly, with the intention that Allah accepts it.
            <br />
            <span className="text-primary/80 italic">No details. No announcement. Just sincerity.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntentionSection;
