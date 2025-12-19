import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import WhatYouCanDoSection from "@/components/sections/WhatYouCanDoSection";
import WhatImDoingSection from "@/components/sections/WhatImDoingSection";
import YourFeelingsAreValidSection from "@/components/sections/YourFeelingsAreValidSection";
import WhatsAheadSection from "@/components/sections/WhatsAheadSection";
import TrustAndPatienceSection from "@/components/sections/TrustAndPatienceSection";
import QuestionsYouMightHaveSection from "@/components/sections/QuestionsYouMightHaveSection";

const DistanceWithTrust = () => {
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
            transition={{ duration: 1.2 }}
          >
            <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
              الثقة
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Distance, With <span className="italic text-primary">Trust</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-12">
              Choosing Allah first, so everything else becomes easier.
            </p>
            
            <div className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-10 md:p-14 shadow-soft max-w-3xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-heading text-2xl md:text-3xl text-foreground mb-6 leading-relaxed"
              >
                Sometimes closeness is not measured by conversation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-heading text-2xl md:text-3xl text-foreground mb-6 leading-relaxed"
              >
                Sometimes it is measured by intention.
              </motion.p>
              
              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
                <div className="w-2 h-2 rounded-full bg-accent/60" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="font-body text-xl md:text-2xl text-foreground/90 leading-relaxed"
              >
                This distance is not absence.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="font-heading text-2xl md:text-3xl text-primary leading-relaxed"
              >
                It is obedience.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Distance Exists */}
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
              Why We Are <span className="italic text-primary">Choosing This</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
            >
              <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
                This step is being taken not because feelings are weak,
                <br />
                but because faith matters more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
            >
              <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
                Allah has placed boundaries not to punish hearts,
                <br />
                but to protect them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
            >
              <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
                Stepping back now is an act of sincerity —
                <br />
                so that what comes next is clean, peaceful, and lasting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reassurance Without Attachment */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              What This Distance Is — <span className="italic text-primary">And What It Is Not</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* This distance is */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
            >
              <h3 className="font-heading text-2xl text-foreground mb-6">
                This distance is:
              </h3>
              <div className="space-y-4">
                {[
                  "An act of trust in Allah",
                  "A step towards halal",
                  "Temporary and purposeful",
                  "Filled with duʿāʾ",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary/60 mt-2" />
                    <p className="font-body text-lg text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* This distance is not */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-soft"
            >
              <h3 className="font-heading text-2xl text-foreground mb-6">
                This distance is not:
              </h3>
              <div className="space-y-4">
                {[
                  "Emotional abandonment",
                  "Forgetting",
                  "Coldness",
                  "Delay without intention",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-muted-foreground/40 mt-2" />
                    <p className="font-body text-lg text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center font-heading text-xl md:text-2xl text-primary italic"
          >
            Silence here is obedience, not indifference.
          </motion.p>
        </div>
      </section>

      {/* His Intention */}
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
              An Intention I <span className="italic text-primary">Carry</span>
            </h2>
          </motion.div>

          <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 md:p-14 shadow-soft">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                During this time, my focus will be on becoming a better servant of Allah —
                in character, in discipline, in responsibility.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                I am working on my deen, my health, my knowledge, and my financial stability
                not to impress, but to be ready.
              </motion.p>

              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-heading text-xl md:text-2xl text-foreground leading-relaxed"
              >
                I am not asking you for time.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-heading text-xl md:text-2xl text-primary leading-relaxed"
              >
                I am asking you for trust in Allah.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mt-6"
              >
                Nikah is intended to be as soon as Allah allows.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed mt-4"
              >
                Commitment is shown best through actions aligned with Allah.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Close Without Contact */}
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
              Close Without <span className="italic text-primary">Contact</span>
            </h2>
          </motion.div>

          <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 md:p-14 shadow-soft">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed text-center"
              >
                Closeness does not disappear because of silence.
              </motion.p>

              <div className="space-y-4 mt-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
                >
                  On days you pray, know that I am praying too.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
                >
                  On days you struggle, know that duʿāʾ still reaches.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
                >
                  On days you feel distant, know that Allah is never distant.
                </motion.p>
              </div>

              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-heading text-xl md:text-2xl text-primary leading-relaxed text-center"
              >
                Hearts connected through Allah are never truly apart.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <WhatYouCanDoSection />

      {/* Your Feelings Are Valid */}
      <YourFeelingsAreValidSection />

      {/* What I'm Doing */}
      <WhatImDoingSection />

      {/* What's Ahead */}
      <WhatsAheadSection />

      {/* Trust & Patience */}
      <TrustAndPatienceSection />

      {/* Questions You Might Have */}
      <QuestionsYouMightHaveSection />

      {/* Removing Pressure */}
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
              No Pressure, <span className="italic text-primary">Ever</span>
            </h2>
          </motion.div>

          <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 md:p-14 shadow-soft">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                Do not carry weight you were never asked to carry.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                Do not rush healing, growth, or patience.
              </motion.p>

              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed text-center"
              >
                There is no expectation here.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed text-center"
              >
                No demand.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed text-center"
              >
                No burden.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-heading text-xl md:text-2xl text-primary leading-relaxed text-center mt-6"
              >
                Even trusting Allah a little is enough.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Calm Message */}
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
              A Gentle <span className="italic text-primary">Reminder</span>
            </h2>
          </motion.div>

          <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 md:p-14 shadow-soft">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                If one day you feel close, make duʿāʾ.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                If one day you feel tired, make duʿāʾ.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                If one day you feel confused, make duʿāʾ.
              </motion.p>

              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                And if one day you feel upset — even with me —
                place that feeling with Allah.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-heading text-xl md:text-2xl text-primary leading-relaxed text-center mt-6"
              >
                Nothing is forced.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-heading text-xl md:text-2xl text-primary leading-relaxed text-center"
              >
                Everything is entrusted.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Promise */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 md:p-14 shadow-soft"
          >
            <div className="space-y-6 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed"
              >
                Ayesha,
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                I care deeply for you.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                But I will care for you even more as a wife, insha'Allah.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                I will cherish every part of you as a husband, insha'Allah.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-heading text-xl md:text-2xl text-primary leading-relaxed"
              >
                And I will be that husband, insha'Allah.
              </motion.p>

              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                Meanwhile, become the best wife for me.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                Practice everything you wish to be after nikah.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                Grow into who you want to become.
              </motion.p>

              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40 animate-breathe" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40 animate-breathe" />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="font-heading text-xl md:text-2xl text-primary leading-relaxed"
              >
                And I promise you this:
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                I will be the best version of myself for you
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                from this second, this hour,
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="font-heading text-xl md:text-2xl text-primary leading-relaxed"
              >
                until the end of this eternity.
              </motion.p>
            </div>
          </motion.div>
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
            className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-10 md:p-14 shadow-soft space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-arabic text-3xl md:text-4xl text-primary/80 mb-4 leading-loose">
                وَمَن يَتَّقِ ٱللَّهَ يَجْعَل لَّهُۥ مَخْرَجًۭا
              </p>
              <p className="font-body text-lg md:text-xl text-foreground/90">
                Whoever is mindful of Allah, He will make a way out.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-base text-muted-foreground/70 italic"
            >
              Distance taken for Allah never leads to loss.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default DistanceWithTrust;

