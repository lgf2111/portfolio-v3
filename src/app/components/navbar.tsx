"use client";
import React from "react";
import {
  IconBriefcase,
  IconBuilding,
  IconHome,
  IconLayoutGrid,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { refs } from "../page";

export function Navbar() {
  const navItems = [
    {
      name: "Landing",
      ref: refs.landing,
      icon: <IconHome className="size-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      ref: refs.about,
      icon: <IconUser className="size-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experiences",
      ref: refs.experiences,
      icon: (
        <IconBriefcase className="size-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      ref: refs.projects,
      icon: (
        <IconLayoutGrid className="size-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      ref: refs.contactForm,
      icon: <IconMessage className="size-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
