import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const verses = [
  {
    arabic: "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
    translation: "If you are grateful, I will surely increase you [in favor]",
    reference: "Surah Ibrahim 14:7",
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease",
    reference: "Surah Ash-Sharh 94:6",
  },
  {
    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    translation: "And whoever relies upon Allah - then He is sufficient for him",
    reference: "Surah At-Talaq 65:3",
  },
];

const QuranSection = () => {
  return (
    <section className="relative py-32 px-6">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Qurʾānic <span className="italic text-primary">Reminders</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            These verses remind me of qualities Allah loves
          </p>
        </motion.div>

        {/* Verses */}
        <div className="space-y-8">
          {verses.map((verse, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/60 via-accent/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-10 shadow-soft hover:shadow-golden transition-shadow duration-500">
                {/* Arabic text */}
                <p className="font-arabic text-2xl md:text-3xl text-foreground text-right leading-loose mb-6 dir-rtl">
                  {verse.arabic}
                </p>
                
                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
                
                {/* Translation */}
                <p className="font-body text-lg text-foreground/80 italic mb-4">
                  "{verse.translation}"
                </p>
                
                {/* Reference */}
                <p className="font-body text-sm text-muted-foreground">
                  — {verse.reference}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuranSection;
