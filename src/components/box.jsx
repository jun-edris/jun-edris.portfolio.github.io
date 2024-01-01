import { cn } from "@/lib/utils";
import React from "react";

const Box = ({ video, glass = true, children, className }) => {
  return (
    <div
      className={cn(
        glass && "backdrop-blur-sm bg-gray-900/10",
        "rounded-xl border border-gray-500 p-3 md:p-5",
        video && "relative box-border row-span-1 overflow-hidden",
        className
      )}
    >
      {video === "galaxy" && (
        <video
          autoPlay
          muted
          loop
          className="absolute h-full w-full object-cover left-0 z-[1] top-0"
        >
          <source src="/projects.webm" type="video/webm" />
        </video>
      )}

      {video === "glitch" && (
        <video
          autoPlay
          muted
          loop
          className="absolute h-full w-full object-cover left-0 z-[1] top-0"
        >
          <source src="/glitch1.webm" type="video/webm" />
        </video>
      )}
      {children}
    </div>
  );
};

export default Box;
