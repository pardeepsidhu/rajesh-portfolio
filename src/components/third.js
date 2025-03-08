"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { useEffect, useState } from "react";

export default function ScrollBasedVelocityDemo({ theme }) {
  const [isDark, setDark] = useState(theme === "dark");

  useEffect(() => {
    setDark(theme === "dark");
  }, [theme]);

  return (
    <div
      className={`relative flex w-full ${isDark ? "bg-black text-white" : "bg-gray-100 text-black"} flex-col items-center justify-center overflow-hidden`}
    >
      <VelocityScroll>Bort To Be A Actor Singer Director And Writer</VelocityScroll>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div> */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}
