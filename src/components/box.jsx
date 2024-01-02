"use client";

import { cn } from "@/lib/utils";
import React from "react";
import useBreakpoint from "@/hooks/useBreakpoint";

const Box = ({ video, glass = true, children, className }) => {
  const breakpoint = useBreakpoint();
  return (
    <div
      className={cn(
        glass && "backdrop-blur-sm bg-gray-900/10",
        "rounded-xl border border-gray-500 p-3 md:p-5 bg-cover",
        video && "relative box-border row-span-1 overflow-hidden",
        video === "galaxy" && "bg-[url(./../../public/galaxy.webp)]",
        video === "glitch" && "bg-[url(./../../public/glitch.webp)]",
        className
      )}
    >
      {video === "galaxy" && breakpoint > 1120 && (
        <video
          autoPlay
          muted
          loop
          playsinline
          className="invisible lg:visible absolute h-full w-full object-cover left-0 z-[1] top-0"
        >
          <source src="projects.webm" type="video/webm" />
        </video>
      )}

      {video === "glitch" && breakpoint > 1120 && (
        <video
          autoPlay
          muted
          loop
          playsinline
          className="invisible lg:visible absolute h-full w-full object-cover left-0 z-[1] top-0"
        >
          <source src="glitch1.webm" type="video/webm" />
        </video>
      )}
      {children}
    </div>
  );
};

export default Box;
