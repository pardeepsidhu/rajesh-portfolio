"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Second({ theme }) {
  const testimonials = [
    {
      quote:
        "Directing 'Vidhwa' was an incredible journey that allowed me to explore the depth of human emotions and stories. It has shaped my perspective as a director.",
      name: "Rajesh Kumar",
      designation: "Writer & Director of 'Vidhwa' - Hindi Web Series",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlbnR8fHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Working on 'Ishq Adhoora' was a transformative experience. It taught me the power of storytelling and capturing raw emotions on screen.",
      name: "Rajesh Kumar",
      designation: "Director of 'Ishq Adhoora' - Punjabi Movie",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlbnR8fHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Collaborating on the song 'Mere Yaar' allowed me to blend my writing and direction skills, creating a powerful visual story for the audience.",
      name: "Rajesh Kumar",
      designation: "Director & Writer of 'Mere Yaar' - Punjabi Song",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlbnR8fHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Storytelling has always been my passion, and working on Punjabi movies has allowed me to bring unspoken emotions to life.",
      name: "Rajesh Kumar",
      designation: "Writer & Director - Multiple Punjabi Movies",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlbnR8fHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Bringing stories to life through my direction has always been my driving force. Every project has taught me something new, and I am grateful for the journey.",
      name: "Rajesh Kumar",
      designation: "Writer, Director & Artist",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlbnR8fHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div
      className={`w-full flex flex-col items-center justify-center min-h-screen transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-6xl w-full text-center px-6 md:px-20 py-10">
        <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>
          Rajesh Kumar's Creative Journey
        </h2>
        <p className={`text-lg mb-12 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          Explore the experiences, thoughts, and creative vision behind some of the most inspiring works in the industry.
        </p>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}