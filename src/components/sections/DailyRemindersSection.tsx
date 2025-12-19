import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const DailyRemindersSection = () => {
  const reminders = [
    "Today, remember that you are enough, exactly as you are.",
    "Today, remember that Allah sees your effort, even when no one else does.",
    "Today, remember that small steps are still steps forward.",
    "Today, remember that patience is a form of worship.",
    "Today, remember that you are allowed to rest.",
    "Today, remember that growth takes time, and that's okay.",
    "Today, remember that you are stronger than you know.",
    "Today, remember that Allah's plan is better than yours.",
    "Today, remember that you don't have to be perfect.",
    "Today, remember that your feelings are valid.",
    "Today, remember that you are doing better than you think.",
    "Today, remember that Allah loves you, always.",
  ];

  const [currentReminder, setCurrentReminder] = useState(0);

  useEffect(() => {
    // Change reminder based on day of month for variety
    const dayOfMonth = new Date().getDate();
    setCurrentReminder(dayOfMonth % reminders.length);
  }, []);

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
            التذكير
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            A Gentle <span className="italic text-primary">Reminder</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            For today, and every day
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 md:p-14 shadow-soft text-center"
        >
          <p className="font-body text-xl md:text-2xl text-foreground/90 leading-relaxed">
            {reminders[currentReminder]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="font-body text-sm text-muted-foreground italic">
            These reminders are here whenever you need them.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DailyRemindersSection;

