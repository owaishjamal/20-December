import { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/sections/HeroSection";
import JourneySection from "@/components/sections/JourneySection";
import AppreciationSection from "@/components/sections/AppreciationSection";
import BirthdayAppreciationSection from "@/components/sections/BirthdayAppreciationSection";
import DuaSection from "@/components/sections/DuaSection";
import BlessingsSection from "@/components/sections/BlessingsSection";
import QuranSection from "@/components/sections/QuranSection";
import ClosingSection from "@/components/sections/ClosingSection";
import UnseenEffortSection from "@/components/sections/UnseenEffortSection";
import YouAreAllowedSection from "@/components/sections/YouAreAllowedSection";
import SpecificAppreciationSection from "@/components/sections/SpecificAppreciationSection";
import MotivationalSection from "@/components/sections/MotivationalSection";
import PersonalLetter from "@/components/sections/PersonalLetter";
import PauseCard from "@/components/sections/PauseCard";
import TimeAwareMessage from "@/components/TimeAwareMessage";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (endRef.current) {
        const rect = endRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          setHasScrolledToEnd(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-serene">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      <TimeAwareMessage />
      
      {/* Birthday Appreciation - Special Section */}
      <BirthdayAppreciationSection />
      <PauseCard index={0} />
      
      {/* Journey & Appreciation */}
      <JourneySection />
      <AppreciationSection />
      <SpecificAppreciationSection />
      <PauseCard index={1} />
      
      {/* Unseen Effort & Blessings */}
      <UnseenEffortSection />
      <BlessingsSection />
      <PauseCard index={2} />
      
      {/* Dua & Quran */}
      <DuaSection />
      <QuranSection />
      <PauseCard index={3} />
      
      {/* Final Sections */}
      <YouAreAllowedSection />
      <MotivationalSection />
      <ClosingSection />
      
      <div ref={endRef} className="h-1" />
      <PersonalLetter hasScrolledToEnd={hasScrolledToEnd} />
    </main>
  );
};

export default Index;
