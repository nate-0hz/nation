import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x2">
      <Image 
        src="/natepicone-logo-512.png"
        height="40"
        width="40"
        alt="logo"
        className="mr-2"
      />
      <p className={cn("font-thin ", font.className)}>
        nation
      </p>
    </div>
  )
}