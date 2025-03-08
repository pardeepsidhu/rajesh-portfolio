"use client";

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo({ theme }) {
  const data = [
    {
      title: "Writing His First Web Series",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="https://images.pexels.com/photos/30872674/pexels-photo-30872674/free-photo-of-dramatic-cliffs-and-coastline-of-madeira-portugal.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Web Series Writing"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-60 lg:h-80 w-full shadow-lg"
          />
          <div>
            <p className={`text-base md:text-lg font-normal mb-4 ${
              theme === "dark" ? "text-white/80" : "text-black/80"
            }`}>
              Rajesh Kumar took his first step toward his dream by writing his first
              web series. Though it hasn't been released yet, the passion and fire 
              in his heart kept him going.
            </p>
            <p className={`text-sm md:text-base font-normal mb-4 ${
              theme === "dark" ? "text-white/60" : "text-black/60"
            }`}>
              "I know one day the world will watch my stories, and that day I'll
              proudly say — I never gave up."  
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Dreaming to Direct a Movie",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="https://images.pexels.com/photos/30586023/pexels-photo-30586023/free-photo-of-camel-ride-in-the-egyptian-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Dream of Directing a Movie"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-60 lg:h-80 w-full shadow-lg"
          />
          <div>
            <p className={`text-base md:text-lg font-normal mb-4 ${
              theme === "dark" ? "text-white/80" : "text-black/80"
            }`}>
              Apart from writing, Rajesh has a deep desire to direct his own movie one day.
              Every scene he imagines, he writes it as if he is already directing it.
            </p>
            <p className={`text-sm md:text-base font-normal mb-4 ${
              theme === "dark" ? "text-white/60" : "text-black/60"
            }`}>
              "I don't want to just tell stories, I want to make the audience feel them."
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Aspirations to Become a Singer",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="https://images.pexels.com/photos/8290032/pexels-photo-8290032.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Aspiring Singer"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-60 lg:h-80 w-full shadow-lg"
          />
          <div>
            <p className={`text-base md:text-lg font-normal mb-4 ${
              theme === "dark" ? "text-white/80" : "text-black/80"
            }`}>
              Singing has always been a part of Rajesh's soul. Although he hasn't released
              any official song yet, his voice has already touched the hearts of many
              during small gatherings and local events.
            </p>
            <p className={`text-sm md:text-base font-normal mb-4 ${
              theme === "dark" ? "text-white/60" : "text-black/60"
            }`}>
              "One day, the world will not just listen to my songs; they'll feel my voice."
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Writing Lyrics from the Heart",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="https://images.pexels.com/photos/4048672/pexels-photo-4048672.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Lyrics Writing"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-60 lg:h-80 w-full shadow-lg"
          />
          <div>
            <p className={`text-base md:text-lg font-normal mb-4 ${
              theme === "dark" ? "text-white/80" : "text-black/80"
            }`}>
              Rajesh has a unique talent for writing deep and meaningful lyrics. His words
              connect directly to the soul of people, making them feel the emotions he writes.
            </p>
            <p className={`text-sm md:text-base font-normal mb-4 ${
              theme === "dark" ? "text-white/60" : "text-black/60"
            }`}>
              "Writing lyrics isn't my skill; it's my heart speaking in the form of words."
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Future Goals & Ambitions",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="https://images.pexels.com/photos/6534386/pexels-photo-6534386.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Future Ambitions"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-60 lg:h-80 w-full shadow-lg"
          />
          <div>
            <p className={`text-base md:text-lg font-normal mb-4 ${
              theme === "dark" ? "text-white/80" : "text-black/80"
            }`}>
              Rajesh Kumar's journey has just begun. His dream is to become a well-known
              artist, singer, writer, and director. Though nothing has been officially
              released yet, his determination never fades.
            </p>
            <p className={`text-sm md:text-base font-normal mb-4 ${
              theme === "dark" ? "text-white/60" : "text-black/60"
            }`}>
              "I have no backup plan. I was born to create art, and I will make it happen one day."
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      className={`w-full min-h-screen transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Timeline theme={theme} data={data} />
    </div>
  );
}
