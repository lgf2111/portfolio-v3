import React from "react";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function Certifications() {
  return (
    <div>
      <h1 className="text-4xl">Certifications</h1>
      <ParallaxScroll images={images} className="my-5" />
    </div>
  );
}

const images = [
  "/certifications/aws-saa.webp",
  "/certifications/google-cybersecurity.webp",
  "/certifications/google-digital_marketing_and_e_commerce.webp",
  "/certifications/google-project_management.webp",
  "/certifications/aisg-literacy_in_ai.webp",
  "/certifications/udemy-advanced_react.webp",
  "/certifications/udemy-advanced_django.webp",
  "/certifications/udemy-dva.webp",
  "/certifications/udemy-saa.webp",
];
