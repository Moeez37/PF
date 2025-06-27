'use client';
import React, { useEffect, useRef, useState } from "react";
import homeContent from "@/content/homeContent";
import { motion } from "framer-motion";
// import RecentWorkCard from "@/components/sections/RecentWorkCard"; // Example card

const ExperienceSection = () => {
  const {
    years,
    yearsLabel,
    clientSatisfaction,
    clientSatisfactionLabel,
    skills,
    skillsDescription,
  } = homeContent.experience;

  const yearsRef = useRef(null);
  const satisfactionRef = useRef(null);
  const [yearsCount, setYearsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [skillPercents, setSkillPercents] = useState(skills.map(() => 0));

  useEffect(() => {
    let yearsStart = 0;
    let satisfactionStart = 0;
    let yearsFrame: number;
    let satisfactionFrame: number;
    let running = true;

    const animate = () => {
      if (!running) return;
      yearsStart += Math.ceil(years / 40);
      satisfactionStart += Math.ceil(clientSatisfaction / 40);
      if (yearsStart < years) {
        setYearsCount(yearsStart);
        yearsFrame = requestAnimationFrame(animate);
      } else {
        setYearsCount(years);
      }
      if (satisfactionStart < clientSatisfaction) {
        setSatisfactionCount(satisfactionStart);
        satisfactionFrame = requestAnimationFrame(animate);
      } else {
        setSatisfactionCount(clientSatisfaction);
      }
    };
    animate();

    // Animate skill percents
    let frame = 0;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);

    function animateSkills() {
      if (!running) return;
      frame++;
      setSkillPercents(skills.map((skill, i) => {
        const target = skill.percent;
        const progress = Math.min(frame / totalFrames, 1);
        return Math.round(target * progress);
      }));
      if (frame < totalFrames) {
        requestAnimationFrame(animateSkills);
      }
    }
    animateSkills();

    return () => {
      running = false;
      cancelAnimationFrame(yearsFrame);
      cancelAnimationFrame(satisfactionFrame);
    };
  }, [years, clientSatisfaction, skills]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-12 items-center md:items-stretch">
      {/* Left: Experience Cards */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Main Card */}
        <div className="bg-neutral-900 rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col items-center justify-center min-w-[220px] min-h-[260px] border border-primary/20">
          <span ref={yearsRef} className="text-6xl md:text-7xl font-extrabold text-primary mb-2">{yearsCount}+</span>
          <span className="text-lg md:text-xl font-semibold text-gray-200 text-center">{yearsLabel}</span>
        </div>
        {/* Overlapping Card */}
        <div className="absolute -bottom-3 -right-5 bg-gray-700 text-white rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border-4 border-neutral-900">
          <span ref={satisfactionRef} className="text-2xl font-bold">{satisfactionCount}%</span>
          <span className="text-xs font-medium uppercase tracking-wider">{clientSatisfactionLabel}</span>
        </div>
      </div>
      {/* Right: Skills */}
      <div className="flex-1 flex flex-col gap-6 justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">My Skills</h3>
        <p className="text-muted mb-4 max-w-xl">{skillsDescription}</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <div key={skill.name} className="relative inline-flex items-center px-4 py-2 rounded-full bg-muted-dark border border-primary/40 overflow-hidden shadow min-w-[90px]">
              <motion.div
                className="absolute left-0 top-0 h-full z-0"
                initial={{ width: 0 }}
                animate={{ width: `${skillPercents[i]}%` }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                style={{
                  borderRadius: '9999px',
                  background: 'linear-gradient(90deg, var(--secondary) 0%, var(--primary) 100%)',
                  opacity: 0.92,
                  boxShadow: '0 0 12px 2px var(--primary)',
                }}
              />
              <span className="relative z-10 font-semibold text-foreground drop-shadow">{skill.name}</span>
              <span className="relative z-10 ml-2 font-bold text-foreground drop-shadow">{skillPercents[i]}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 