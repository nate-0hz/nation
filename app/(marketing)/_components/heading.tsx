"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 font-sans">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-relaxed">
        Everything about you, together. You are <span className="underline">nation</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        nation brings all your thoughts together, without a monthly fee.
      </h3>
      <Button>
        Enter Nation 
        <ArrowRight  className="h-4 w-4 ml-2"/>
      </Button>
    </div>
  )
}

