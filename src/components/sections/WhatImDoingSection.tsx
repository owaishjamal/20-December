import { motion } from "framer-motion";

const WhatImDoingSection = () => {
  const efforts = [
    {
      area: "My Deen",
      content: "Strengthening my relationship with Allah. Improving my salah, my character, my understanding. Becoming a better servant, day by day.",
    },
    {
      area: "My Character",
      content: "Working on patience, kindness, responsibility. Learning to be better in small ways, consistently.",
    },
    {
      area: "My Knowledge",
      content: "Learning what I need to know. Understanding what it means to be responsible, to lead, to support.",
    },
    {
      area: "My Financial Stability",
      content: "Building what needs to be built. Preparing practically, so when the time comes, everything is ready.",
    },
    {
      area: "My Health",
      content: "Taking care of myself physically and mentally. Because I need to be strong, not just for myself, but to be ready.",
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
            الجهد
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            What I'm <span className="italic text-primary">Doing</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Not to impress, but to be ready. Not for show, but for sincerity.
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {efforts.map((effort, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary/60 mt-2" />
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    {effort.area}
                  </h3>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    {effort.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 shadow-soft text-center"
        >
          <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-4">
            I am doing this work not to prove anything to you,
            <br />
            but to prove something to myself and to Allah.
          </p>
          <p className="font-heading text-xl md:text-2xl text-primary leading-relaxed">
            Actions speak louder than words.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatImDoingSection;

