"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function ({ theme}) {
  return (
    <div
      className={` w-full flex  transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="relative w-full  flex  overflow-hidden">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: theme === "dark"
              ? "bg-black text-white"
              : "bg-gray-100 text-black",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-row flex-wrap space-y-6">
          {/* Heading */}
          <div className="p-5 md:pl-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
            style={{
            //   background: "linear-gradient(45deg, #ff6a00, #ee0979)",bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rajesh Kumar
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg max-w-xl p-2"
          >
            "I believe every story has a song, and every song has a soul. I aim
            to transform emotions into timeless art."
          </motion.p>


                  {/* Personal Information */}
                  <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg space-y-2"
          >
            <p>
              <strong>Profession:</strong> Lyrics, Writer, Director, Artist,
              Singer
            </p>
            <p>
              <strong>Hometown:</strong> Chandigarh, Mohali
            </p>
            <p>
              <strong>Age:</strong> 20
            </p>
            <p>
              <strong>Marital Status:</strong> Unmarried
            </p>
          </motion.div>
          </div>
        

          {/* Full-Sized Phone Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-[310] h-[310px] relative m-5 md:m-10 border-4 border-white shadow-xl"
          >
            <Image
              src="https://images.pexels.com/photos/30382759/pexels-photo-30382759/free-photo-of-minimalist-shell-shaped-dish-on-white-bedding.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Rajesh Kumar"
              layout="fill"
              objectFit="cover"
              className="w-full h-full "
            />
          </motion.div>

  
        </div>
      </div>
    </div>
  );
};
