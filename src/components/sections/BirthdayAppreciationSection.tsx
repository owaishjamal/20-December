import { motion } from "framer-motion";
import { Sparkles, Gift, Heart, Star } from "lucide-react";

const BirthdayAppreciationSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Special birthday background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/15 blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/15 blur-3xl animate-pulse-soft animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Birthday Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 mb-8 shadow-golden">
            <Star className="w-12 h-12 text-accent" />
          </div>
          <span className="inline-block font-arabic text-3xl text-primary/80 mb-4">
            عيد ميلاد سعيد
          </span>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Today Is About <span className="text-gradient-golden italic">You</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Not about what you've done. Not about what you will do.
            <br />
            Simply about who you are.
          </p>
        </motion.div>

        {/* Main Appreciation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="absolute -inset-2 bg-gradient-to-br from-accent/30 via-primary/20 to-accent/30 rounded-3xl blur-lg" />
          <div className="relative bg-card/90 backdrop-blur-md border border-border/50 rounded-3xl p-10 md:p-16 shadow-golden">
            <div className="space-y-8 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-heading text-3xl md:text-4xl text-foreground leading-relaxed"
              >
                Ayesha,
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-body text-xl md:text-2xl text-foreground/90 leading-relaxed"
              >
                On this day, I want you to know that your existence itself is a blessing.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed"
              >
                Not because of what you achieve, but because of who you are.
                <br />
                Not because of what you give, but because of the light you carry.
              </motion.p>

              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-accent/50 animate-breathe" />
                <Heart className="w-6 h-6 text-accent/70" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-accent/50 animate-breathe" />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-heading text-2xl md:text-3xl text-primary leading-relaxed"
              >
                You are special. Simply because you exist.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* What Makes You Special */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            What Makes You <span className="italic text-primary">Special</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: "Your Quiet Strength",
              content: "The way you carry burdens without complaint. The way you show up even when it's hard. That is rare.",
            },
            {
              title: "Your Gentle Heart",
              content: "How you care for others even when you need care yourself. How you choose kindness even when it's not returned.",
            },
            {
              title: "Your Sincere Effort",
              content: "Every small step you take matters. Every day you continue matters. Your consistency is not ordinary.",
            },
            {
              title: "Your Patience",
              content: "The patience you've shown through years of difficulty. The patience you show with yourself. That is strength.",
            },
            {
              title: "Your Presence",
              content: "Simply being in your presence feels calm. Your energy is gentle, your spirit is peaceful.",
            },
            {
              title: "Your Authenticity",
              content: "You don't pretend. You don't perform. You are real, and that realness is beautiful.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-golden transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gift & Sadqah Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-10 md:p-14 shadow-soft"
        >
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-6 shadow-golden">
              <Gift className="w-9 h-9 text-primary" />
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-heading text-2xl md:text-3xl text-foreground"
            >
              About Gifts
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto"
            >
              I have thought of many gifts for you.
              <br />
              Things I want to give you, things I want to do for you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-heading text-xl md:text-2xl text-primary leading-relaxed"
            >
              All of those will come on nikah night, insha'Allah.
            </motion.p>

            <div className="flex items-center justify-center gap-4 my-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
              <div className="w-2 h-2 rounded-full bg-accent/60" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto"
            >
              For now, on this special day,
              <br />
              I have done <span className="font-heading text-primary">sadqah</span> in your name.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="font-heading text-2xl md:text-3xl text-primary leading-relaxed"
            >
              For your protection.
              <br />
              For your safety.
              <br />
              For your well-being.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="font-body text-base text-muted-foreground italic mt-6"
            >
              May Allah accept it and protect you always.
            </motion.p>
          </div>
        </motion.div>

        {/* Final Birthday Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-10 shadow-soft">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-heading text-2xl md:text-3xl text-foreground mb-4 leading-relaxed"
            >
              Today, and every day,
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-heading text-3xl md:text-4xl text-primary leading-relaxed"
            >
              You are deeply appreciated.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-body text-lg text-muted-foreground mt-6"
            >
              Not for what you do, but simply for being you.
            </motion.p>
          </div>
        </motion.div>

        {/* Arabic Blessing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-12"
        >
          <p className="font-arabic text-3xl md:text-4xl text-primary/80 mb-4">
            بارك الله فيكِ يا عائشة
          </p>
          <p className="font-body text-sm text-muted-foreground uppercase tracking-widest">
            May Allah bless you, Ayesha
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdayAppreciationSection;

