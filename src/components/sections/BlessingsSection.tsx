import { motion } from "framer-motion";
import { Sparkles, Shield, BookOpen, Heart, Sun, Leaf } from "lucide-react";

const blessings = [
  { icon: Shield, quality: "Patience", arabic: "الصبر" },
  { icon: Heart, quality: "Kindness", arabic: "اللطف" },
  { icon: Leaf, quality: "Modesty", arabic: "الحياء" },
  { icon: Sun, quality: "Strength", arabic: "القوة" },
  { icon: BookOpen, quality: "Sincerity", arabic: "الإخلاص" },
  { icon: Sparkles, quality: "Wisdom", arabic: "الحكمة" },
];

const BlessingsSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
            النعم
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Blessings Allah Has <span className="italic text-primary">Given You</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Qualities that reflect light, granted by the Most Merciful
          </p>
        </motion.div>

        {/* Blessings grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {blessings.map((blessing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mx-auto w-24 h-24 mb-6">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-accent/30 group-hover:border-accent/60 transition-colors duration-500" />
                {/* Inner glow */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-secondary to-card shadow-soft group-hover:shadow-golden transition-shadow duration-500" />
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <blessing.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="font-heading text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {blessing.quality}
              </h3>
              <span className="font-arabic text-lg text-muted-foreground">
                {blessing.arabic}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlessingsSection;
