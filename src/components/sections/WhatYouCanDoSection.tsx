import { motion } from "framer-motion";

const WhatYouCanDoSection = () => {
  const guidancePoints = [
    {
      title: "Focus on Your Deen",
      content: "One prayer at a time. One day at a time. There is no rush. Consistency matters more than perfection.",
    },
    {
      title: "Take Care of Yourself",
      content: "Rest when you need to. Eat well. Move your body gently. Your well-being matters.",
    },
    {
      title: "Be Patient with Yourself",
      content: "Growth takes time. Healing takes time. You are allowed to move at your own pace.",
    },
    {
      title: "Make Dua",
      content: "Always. On good days and hard days. Dua is never restricted. It is always welcomed.",
    },
    {
      title: "Trust Allah's Plan",
      content: "What Allah has written is better than what we plan. Trust in His timing, His wisdom, His love for you.",
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
            التوجيه
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            What You Can <span className="italic text-primary">Do</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Gentle guidance, not demands. These are suggestions, not requirements.
          </p>
        </motion.div>

        <div className="space-y-6">
          {guidancePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft hover:shadow-golden transition-all duration-500"
            >
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                {point.title}
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {point.content}
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
          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8">
            <p className="font-body text-lg text-foreground/90 leading-relaxed">
              Remember: These are not rules. They are gentle suggestions.
              <br />
              You know yourself best. Trust your intuition.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouCanDoSection;

