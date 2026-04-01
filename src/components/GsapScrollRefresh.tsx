"use client";

import { useEffect } from "react";
import { refreshScrollTriggers } from "@/lib/gsap-client";

export function GsapScrollRefresh() {
  useEffect(() => {
    const onResize = () => refreshScrollTriggers();
    window.addEventListener("resize", onResize, { passive: true });
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return null;
}
