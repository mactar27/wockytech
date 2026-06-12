"use client";

import { useState, useEffect } from "react";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { Onboarding } from "@/components/ui/Onboarding";
import { hasCompletedFirstVisit, markFirstVisitComplete } from "@/lib/onboarding";

type Phase = "checking" | "splash" | "onboarding" | "done";

export function FirstVisitGate({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("checking");

  useEffect(() => {
    setPhase(hasCompletedFirstVisit() ? "done" : "splash");
  }, []);

  const finish = () => {
    markFirstVisitComplete();
    setPhase("done");
  };

  return (
    <>
      {phase === "splash" && <SplashScreen onComplete={() => setPhase("onboarding")} />}
      {phase === "onboarding" && <Onboarding onComplete={finish} />}

      <div
        className={`transition-opacity duration-700 ${
          phase === "done" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {children}
      </div>
    </>
  );
}
