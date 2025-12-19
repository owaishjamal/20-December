import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TimeAwareMessage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    let timeMessage = "";

    if (hour >= 5 && hour < 12) {
      timeMessage = "May your day begin with ease.";
    } else if (hour >= 12 && hour < 17) {
      timeMessage = "May your afternoon bring peace.";
    } else if (hour >= 17 && hour < 22) {
      timeMessage = "May your evening be gentle.";
    } else {
      timeMessage = "If you're reading this tired, your effort still matters.";
    }

    setMessage(timeMessage);
  }, []);

  if (!message) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="text-center py-8 -mt-8"
    >
      <p className="font-body text-sm text-muted-foreground italic">
        {message}
      </p>
    </motion.div>
  );
};

export default TimeAwareMessage;

