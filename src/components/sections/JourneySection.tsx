import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Star, Heart, Footprints, GraduationCap, Home, Sparkles, LayoutGrid, List } from "lucide-react";

const journeySteps = [
  {
    icon: Star,
    title: "Early Strength",
    content: "From childhood, you carried burdens that many never see. You faced hardship early, yet never made it a complaint. You learned patience before most learn comfort.",
    reflection: "This phase required patience.",
  },
  {
    icon: Heart,
    title: "Gorakhpur",
    content: "Even while facing your own difficulties, you chose to help others in their moments of need — standing for people while standing alone yourself.",
    reflection: "This phase required strength.",
  },
  {
    icon: Home,
    title: "Responsibility",
    content: "At an age where many remain carefree, you stepped into responsibility. You began managing a household when others were still learning how to manage themselves.",
    reflection: "This phase required maturity.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    content: "Your path was never easy — yet your focus on education never weakened. You pursued IT while balancing responsibilities at home, supporting your Ammi alongside your own growth.",
    reflection: "This phase required dedication.",
  },
  {
    icon: Footprints,
    title: "BPT Journey",
    content: "You chose BPT — not as an escape, but as a commitment to building something meaningful. A decision made with clarity and determination.",
    reflection: "This phase required clarity.",
  },
  {
    icon: Sparkles,
    title: "Four Years",
    content: "For the last four years, you have worked consistently. No noise. No demands for appreciation. Just effort, discipline, and sincerity.",
    reflection: "This phase required consistency.",
  },
];

const JourneySection = () => {
  const [viewMode, setViewMode] = useState<"timeline" | "constellation">("timeline");

  // Split content into lines for line-by-line reveal
  const splitContentIntoLines = (content: string) => {
    return content.split(". ").filter(line => line.trim().length > 0);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block font-arabic text-2xl text-primary/70 mb-4">
            الرحلة
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Your <span className="italic text-primary">Journey</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            A path walked with patience, resilience, and dignity — often without support, often without appreciation
          </p>
          
          {/* View toggle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setViewMode("timeline")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                viewMode === "timeline"
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <List className="w-4 h-4" />
              <span className="text-sm font-body">Timeline</span>
            </button>
            <button
              onClick={() => setViewMode("constellation")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                viewMode === "constellation"
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="text-sm font-body">Constellation</span>
            </button>
          </div>
        </motion.div>

        {viewMode === "timeline" ? (
          /* Timeline View */
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20 hidden md:block" />

            <div className="space-y-12 md:space-y-16">
              {journeySteps.map((step, index) => {
                const contentLines = splitContentIntoLines(step.content);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: index * 0.15 }}
                    className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content card */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-golden transition-shadow duration-500">
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="font-heading text-xl md:text-2xl text-foreground mb-3"
                        >
                          {step.title}
                        </motion.h3>
                        <div className="font-body text-muted-foreground leading-relaxed">
                          {contentLines.map((line, lineIndex) => (
                            <motion.p
                              key={lineIndex}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.3 + lineIndex * 0.1 }}
                              className="mb-2"
                            >
                              {lineIndex < contentLines.length - 1 ? `${line}.` : line}
                            </motion.p>
                          ))}
                        </div>
                        {/* Phase reflection */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                          className="mt-4 font-body text-sm text-accent/80 italic"
                        >
                          {step.reflection}
                        </motion.p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-card border-2 border-accent/30 flex items-center justify-center shadow-golden"
                      >
                        <step.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                    </div>

                    {/* Empty space for layout */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Constellation View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-soft hover:shadow-golden transition-all duration-500 text-center h-full flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-card border-2 border-accent/30 flex items-center justify-center shadow-golden mb-4"
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-heading text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                    {step.content}
                  </p>
                  <p className="font-body text-xs text-accent/80 italic mt-auto">
                    {step.reflection}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="font-body text-xl text-foreground/80 italic max-w-2xl mx-auto">
            That kind of perseverance deserves recognition.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
