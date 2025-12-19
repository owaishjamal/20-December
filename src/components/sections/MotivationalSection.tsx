import { motion } from "framer-motion";

const MotivationalSection = () => {
  const motivations = [
    {
      statement: "You are capable of more than you know.",
      support: "You've already shown this through everything you've overcome.",
    },
    {
      statement: "Your strength is quiet but real.",
      support: "It doesn't need to be loud to be powerful.",
    },
    {
      statement: "Allah has given you everything you need.",
      support: "Trust in what He has given you, and trust in His plan.",
    },
    {
      statement: "You are exactly where you need to be.",
      support: "Even when it doesn't feel like it, Allah's timing is perfect.",
    },
    {
      statement: "Every small step matters.",
      support: "Progress doesn't have to be dramatic to be real.",
    },
  ];

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
            التشجيع
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Gentle <span className="italic text-primary">Encouragement</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Reminders of your strength, your worth, your capability
          </p>
        </motion.div>

        <div className="space-y-6">
          {motivations.map((motivation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
            >
              <p className="font-heading text-xl md:text-2xl text-foreground mb-3">
                {motivation.statement}
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {motivation.support}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 shadow-soft">
            <p className="font-heading text-2xl md:text-3xl text-foreground mb-4 leading-relaxed">
              You have everything you need.
            </p>
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
              You are enough.
              <br />
              You are capable.
              <br />
              You are seen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MotivationalSection;

