import { motion } from "framer-motion";

const TrustAndPatienceSection = () => {
  const reminders = [
    {
      title: "Trust in Allah's Timing",
      content: "What Allah has planned is better than what we plan. His timing is perfect, even when we don't understand it.",
    },
    {
      title: "Patience is Worship",
      content: "Every moment of patience is rewarded. Every day you wait with trust is an act of worship.",
    },
    {
      title: "This Time is Not Wasted",
      content: "Time spent in obedience to Allah is never wasted. Time spent preparing is never wasted. Time spent growing is never wasted.",
    },
    {
      title: "Allah Sees Your Effort",
      content: "Even when no one else sees, Allah sees. Even when it feels invisible, your patience matters to Him.",
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
            الصبر والثقة
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Trust & <span className="italic text-primary">Patience</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Reminders for when it feels difficult
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {reminders.map((reminder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
            >
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                {reminder.title}
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {reminder.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 shadow-soft text-center"
        >
          <p className="font-arabic text-2xl md:text-3xl text-primary/80 mb-4">
            وَمَن يَتَّقِ ٱللَّهَ يَجْعَل لَّهُۥ مَخْرَجًۭا
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/90 mb-4">
            Whoever is mindful of Allah, He will make a way out.
          </p>
          <p className="font-body text-base text-muted-foreground italic">
            Trust Him. He never fails those who trust Him.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustAndPatienceSection;

