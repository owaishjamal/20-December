import { motion } from "framer-motion";

interface PauseCardProps {
  index?: number;
}

const PauseCard = ({ index = 0 }: PauseCardProps) => {
  const messages = [
    {
      title: "Pause for a moment",
      content: "Everything written above was carried silently. Not everyone is meant to walk an easy path.",
    },
    {
      title: "Take your time",
      content: "What you've read so far represents years of patience. There is no rush here.",
    },
    {
      title: "You are here",
      content: "Each word above was chosen with care. Your presence here matters.",
    },
  ];

  const message = messages[index % messages.length];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-24 px-6 w-full"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-12 md:p-16 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-2xl md:text-3xl text-foreground mb-6"
          >
            {message.title}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {message.content}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default PauseCard;

