"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function initGsap() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };

export function refreshScrollTriggers() {
  if (typeof window === "undefined") return;
  initGsap();
  ScrollTrigger.refresh();
}
