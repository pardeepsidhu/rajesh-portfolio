"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function Second({ theme }) {
  return (
    <div
      className={`w-full flex justify-center items-center min-h-screen transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 px-6 md:px-20 py-10">
        {/* Left Section - Personal Info */}
        <div className="flex-1 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
          >
            Rajesh Kumar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg max-w-xl"
          >
            &quot;I believe every story has a song, and every song has a soul. I aim
            to transform emotions into timeless art.&quot;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg space-y-2 bg-white/10 p-4 rounded-lg shadow-lg border border-white/20"
          >
            <p><strong>Profession:</strong> Lyrics, Writer, Director, Artist, Singer</p>
            <p><strong>Hometown:</strong> Chandigarh, Mohali</p>
            <p><strong>Age:</strong> 20</p>
            <p><strong>Marital Status:</strong> Unmarried</p>
          </motion.div>
        </div>

        {/* Right Section - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] border-4 border-white shadow-2xl rounded-xl overflow-hidden"
        >
          <Image
            src="https://images.pexels.com/photos/30382759/pexels-photo-30382759/free-photo-of-minimalist-shell-shaped-dish-on-white-bedding.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Rajesh Kumar"
            width={350}
            height={350}
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
