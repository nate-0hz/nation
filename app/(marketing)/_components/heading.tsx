"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4 font-sans">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-relaxed">
        Everything about you, together. You are <span className="underline">nation</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        nation brings all your thoughts together, without a monthly fee.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Get into Nation 
            <ArrowRight  className="h-4 w-4 ml-2"/>
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Nation for free
          </Button>
        </SignInButton>
      )}
    </div>
  )
}

