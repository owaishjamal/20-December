import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import DailyRemindersSection from "@/components/sections/DailyRemindersSection";
import MotivationalSection from "@/components/sections/MotivationalSection";

const GentlePath = () => {
  return (
    <main className="min-h-screen bg-gradient-serene">
      <Navigation />
      
      {/* Opening Reflection */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
              المسار
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              A Gentle Path <span className="italic text-primary">Forward</span>
            </h1>
            <div className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-10 shadow-soft">
              <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">
                Growth does not begin with force.
                <br />
                It begins with kindness towards oneself.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Loving Yourself */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Taking Care of <span className="italic text-primary">Yourself</span>
            </h2>
          </motion.div>

          <div className="space-y-4 mb-8">
            {[
              "Doing skincare because it feels good",
              "Eating well even when there is no goal",
              "Resting without guilt",
              "Taking breaks without explanation",
              "Choosing calm over pressure",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-6 shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent/60" />
                  <p className="font-body text-lg text-foreground/90">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center font-heading text-xl md:text-2xl text-primary italic"
          >
            Self-care is not selfish.
          </motion.p>
        </div>
      </section>

      {/* Relationship with Allah */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
              التقرب
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Growing Closer to Allah — <span className="italic text-primary">Gently</span>
            </h2>
          </motion.div>

          <div className="space-y-4 mb-8">
            {[
              "Starting with namaz on time, one prayer at a time",
              "Being patient with Ammi, even when it's hard",
              "Making dua even without words",
              "Turning to Allah on good days and bad days",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-6 shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary/60" />
                  <p className="font-body text-lg text-foreground/90">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-soft text-center"
          >
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
              Some days consistency will come easily.
              <br />
              Some days it won't. Both days are accepted.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dua Without Conditions */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
              الدعاء
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Dua, Always <span className="italic text-primary">Allowed</span>
            </h2>
          </motion.div>

          <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10 shadow-soft">
            <div className="space-y-6 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                On days you feel hopeful, make dua for what you want.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                On days you feel tired, make dua for strength.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                On days you feel distant, make dua for closeness.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                On days you feel upset with me, make any dua you like.
              </motion.p>
              <div className="flex items-center justify-center gap-4 my-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-heading text-2xl md:text-3xl text-primary leading-relaxed"
              >
                Dua is never restricted.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* No Forcing Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              No Pressure, <span className="italic text-primary">No Force</span>
            </h2>
          </motion.div>

          <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10 shadow-soft">
            <div className="space-y-6 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                You are not required to be perfect.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                You are not required to move fast.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                You are not required to prove anything.
              </motion.p>
              <div className="flex items-center justify-center gap-4 my-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-heading text-xl md:text-2xl text-primary leading-relaxed"
              >
                Little steps are still steps.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Blessing */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 md:p-14 shadow-soft space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed"
            >
              May Allah make your path gentle.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed"
            >
              May Allah never burden you with more than you can carry.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-heading text-2xl md:text-3xl text-primary leading-relaxed"
            >
              And may Allah replace every small effort with peace.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6"
            >
              <p className="font-arabic text-2xl md:text-3xl text-primary/80">
                آمين يا رب العالمين
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Daily Reminders */}
      <DailyRemindersSection />

      {/* Motivational Section */}
      <MotivationalSection />
    </main>
  );
};

export default GentlePath;

