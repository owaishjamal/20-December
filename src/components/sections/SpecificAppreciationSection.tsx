import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const SpecificAppreciationSection = () => {
  const appreciations = [
    {
      title: "The Way You Handle Difficulty",
      content: "You don't complain. You don't make excuses. You simply continue. That quiet strength is rare.",
    },
    {
      title: "How You Care for Others",
      content: "Even when you need care yourself, you show up for others. That selflessness comes from a beautiful heart.",
    },
    {
      title: "Your Consistency",
      content: "Day after day, you show up. Not for applause, not for recognition. Just because it's who you are.",
    },
    {
      title: "Your Patience",
      content: "The patience you've shown through years of difficulty. The patience you show with yourself. That is true strength.",
    },
    {
      title: "Your Authenticity",
      content: "You don't pretend. You don't perform. You are real, and that realness is beautiful.",
    },
    {
      title: "Your Resilience",
      content: "Every time life gets hard, you find a way. Not loudly, not dramatically. Just quietly, consistently.",
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 mb-8 shadow-golden">
            <Eye className="w-9 h-9 text-accent" />
          </div>
          <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
            التقدير الخاص
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Things I Notice <span className="italic text-primary">About You</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Specific qualities that make you who you are
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {appreciations.map((appreciation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft hover:shadow-golden transition-all duration-500"
            >
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                {appreciation.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {appreciation.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 shadow-soft">
            <p className="font-heading text-2xl md:text-3xl text-foreground mb-4 leading-relaxed">
              These are not just words.
            </p>
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
              These are things I've observed. Things I've noticed.
              <br />
              Things that make you special, simply because they're true.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecificAppreciationSection;

