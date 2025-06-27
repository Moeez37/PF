'use client';
import React from "react";
import homeContent from "@/content/homeContent";
import Button from "@/components/common/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import Popover from "@/components/common/Popover";

const WorkExperience = () => {
  const { title, subtitle, jobs } = homeContent.workExperience;
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-200 mb-8">{subtitle}</p>
      <div className="flex flex-col gap-8">
        {jobs.map((job, idx) => (
          <Popover
            key={job.company + job.date}
            trigger={
              <motion.div
                className="flex flex-col md:flex-row items-center md:items-stretch bg-card-dark/80 backdrop-blur-lg rounded-2xl shadow-glass p-6 md:p-8 border border-border-dark hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              >
                {/* Date */}
                <div className="md:w-48 flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
                  <span className="text-lg font-semibold text-primary">{job.date}</span>
                </div>
                {/* Center: Logo, Title, Location, Type */}
                <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <img src={job.logo} alt={job.company} className="h-12 w-12 rounded-full object-cover bg-white border border-primary/20" />
                  <div>
                    <h4 className="text-lg font-bold text-white">{job.title}</h4>
                    <p className="text-gray-400 text-sm">{job.company} &bull; {job.location} &bull; <span className="font-bold">{job.type}</span></p>
                  </div>
                </div>
                {/* Right: Website Button */}
                <Link href={job.website} className="bg-gray-700 rounded-md mt-4 md:mt-0 md:ml-auto flex items-center" target="_blank">
                  <Button variant="transparent">
                    Go to Website
                  </Button>
                </Link>
              </motion.div>
            }
          >
            <div className="text-left">
              <div className="font-bold text-lg mb-1">{job.title} @ {job.company}</div>
              <div className="mb-1 text-primary">{job.date} | {job.location} | {job.type}</div>
              <Link href={job.website} target="_blank" rel="noopener noreferrer" className="underline text-primary">
                Visit Website
              </Link>
            </div>
          </Popover>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience; 