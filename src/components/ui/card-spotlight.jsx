"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  theme,

}) => {
  // ✅ Dynamically Adjust Theme Based on Props
  const bgColor =
    theme === "dark"
      ? "bg-black text-white border-neutral-800"
      : "bg-gray-100 text-black border-neutral-300";

  return (
    <div>
      {children}
    </div>
  );
};
