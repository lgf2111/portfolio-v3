import React from "react";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconBrandAmazon,
  IconBrandAws,
  IconBrandGoogle,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function Certifications() {
  return (
    <div>
      <h1 className="text-4xl">Certifications</h1>
      <ParallaxScroll srcs={srcs} className="my-5" />
    </div>
  );
}

const srcs = [
  "/certifications/aws_saa.pdf",
  "/certifications/google_cybersecurity.pdf",
  "/certifications/google_digital-marketing-and-e-commerce.pdf",
  "/certifications/google_project-management.pdf",
  "/certifications/aisg_literacy-in-ai.pdf",
  "/certifications/udemy_advanced-react.pdf",
  "/certifications/udemy_advanced-django.pdf",
  "/certifications/udemy-dva.pdf",
  "/certifications/udemy-saa.pdf",
];
