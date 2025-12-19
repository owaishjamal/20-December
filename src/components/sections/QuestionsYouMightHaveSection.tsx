import { motion } from "framer-motion";

const QuestionsYouMightHaveSection = () => {
  const questions = [
    {
      question: "Why is this distance necessary?",
      answer: "Because Allah has placed boundaries for our protection. Because doing things the halal way creates a stronger foundation. Because patience now means peace later.",
    },
    {
      question: "How long will this last?",
      answer: "As long as Allah wills. There is no set timeline, because Allah's timing is better than ours. Trust that when the time is right, it will happen.",
    },
    {
      question: "Does this mean you don't care?",
      answer: "No. Distance does not mean absence of care. It means care expressed through obedience to Allah. Silence here is respect, not indifference.",
    },
    {
      question: "What if I feel confused?",
      answer: "That's okay. Confusion is normal. When you feel confused, make dua. Ask Allah for clarity. He will guide you.",
    },
    {
      question: "What should I do during this time?",
      answer: "Focus on yourself. Focus on your deen. Focus on becoming who you're meant to be. Take care of yourself. Trust Allah. That's enough.",
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
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Questions You Might <span className="italic text-primary">Have</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Addressing concerns before they become worries
          </p>
        </motion.div>

        <div className="space-y-6">
          {questions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
            >
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">
                {item.question}
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {item.answer}
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
              If you have other questions, place them with Allah.
              <br />
              He knows what you need to know, and He will guide you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuestionsYouMightHaveSection;

