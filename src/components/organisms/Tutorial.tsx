"use client";

import React, { useState } from "react";
import Heading from "../atoms/typography/Heading";
import { useTheme } from "@/contexts/ThemeContext";
import Body from "../atoms/typography/Body";
import { tutorials } from "@/utils/tutorialVideos";
import { YoutubeVideoInterface } from "@/utils/Interfaces/youtubeVideos";

const Tutorial = () => {
  const { activeTheme, theme } = useTheme();

  // State to manage expanded title for "Read More" functionality
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  // Toggle expand/collapse of long titles
  const toggleTitle = (index: number) => {
    setExpanded((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div
      className="md:px-32 py-8 pt-32"
      style={
        {
          // background: theme?.colors?.surface?.tertiary,
        }
      }
    >
      <Heading
        customStyles="text-center text-4xl"
        heading="Tutorials"
        size="l"
        weight="bold"
      />

      <div className="flex flex-wrap justify-between gap-x-1 gap-y-4">
        {tutorials
          .filter((item) => item.type === "regular") // Filter for regular videos
          .map((item: YoutubeVideoInterface, index: number) => (
            <div key={index} className="mb-8 w-full md:w-1/2 lg:w-[32%] ">
              <iframe
                width="100%"
                height="250"
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <Body
                body={`${item.title.slice(0, 45)}...`}
                variant="bold"
                size="medium"
                className="overflow-hidden mb-4 mt-2"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tutorial;
