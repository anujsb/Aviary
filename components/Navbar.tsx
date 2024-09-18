"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export function FloatingNavDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/#video" },
    { name: "Pricing", link: "/#pricing" },
    { name: "Documentation", link: "/documentation" },
    { name: "Blog", link: "/#BlogPage" },
    { name: "Security", link: "/#security" },
  ];

  return (
    <div id="floating-navbar" className="relative w-full ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
