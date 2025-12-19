import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const DietCare = () => {
  return (
    <main className="min-h-screen bg-gradient-serene">
      <Navigation />
      
      {/* Opening Note */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
              الرعاية
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              Diet & Care
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-primary">A Gentle Plan</span>
            </h1>
            <div className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-10 shadow-soft">
              <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
                This page is not about numbers or timelines.
                <br />
                It is about taking care of the body Allah has entrusted — slowly, gently, and with patience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gentle Intention */}
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
          >
            <p className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              The intention is not punishment.
            </p>
            <p className="font-heading text-2xl md:text-3xl text-primary">
              The intention is care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Things to Slowly Reduce */}
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
              Things That Can Be <span className="italic text-primary">Reduced Over Time</span>
            </h2>
          </motion.div>

          <div className="space-y-4 mb-8">
            {[
              "Excess sugar and packaged sweets",
              "Deep-fried foods",
              "Cold drinks and artificial juices",
              "Late-night heavy meals",
              "Eating while emotionally overwhelmed",
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
            className="text-center font-body text-muted-foreground italic"
          >
            Reducing does not mean removing everything at once.
          </motion.p>
        </div>
      </section>

      {/* Things to Slowly Add */}
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
              Things Worth <span className="italic text-primary">Adding Gently</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              "Regular water intake",
              "Home-cooked meals when possible",
              "Fruits and simple foods",
              "Walking or light movement",
              "Eating with calm, not guilt",
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
        </div>
      </section>

      {/* Gamified Motivation */}
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
              Small Steps, <span className="italic text-primary">Quiet Rewards</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Rewards are not conditional, just appreciation.
            </p>
          </motion.div>

          <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10 shadow-soft mb-6">
            <div className="space-y-4">
              {[
                "Beautiful clothes that make you feel good",
                "Elegant abayas that reflect your style",
                "Makeup and beauty items you love",
                "Things that bring you comfort and joy",
                "Small surprises chosen just for you",
              ].map((reward, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent/60" />
                  <p className="font-body text-lg text-foreground/90">{reward}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center font-body text-lg text-foreground/80 italic"
          >
            These are not rewards for perfection — they are acknowledgments of effort.
          </motion.p>
        </div>
      </section>

      {/* Closing Reminder */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 md:p-14 shadow-soft"
          >
            <p className="font-heading text-2xl md:text-3xl text-foreground mb-6 leading-relaxed">
              Even resting is part of the journey.
            </p>
            <p className="font-heading text-2xl md:text-3xl text-primary leading-relaxed">
              Consistency matters more than speed.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default DietCare;

