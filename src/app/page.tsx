"use client";

import React from "react";

import { refs } from "@/utils/refs";

import ContactForm from "./contact-form";
import Landing from "./landing";
import About from "./about";
import Experiences from "./experiences";
import Certifications from "./certifications";
import Projects from "./projects";

export default function Home() {
  return (
    <main>
      <div ref={refs.landing}>
        <Landing />
      </div>
      <div className="p-5" ref={refs.about}>
        <About />
      </div>
      <div className="p-5" ref={refs.experiences}>
        <Experiences />
      </div>
      <div className="p-5" ref={refs.certifications}>
        <Certifications />
      </div>
      <div className="p-5" ref={refs.projects}>
        <Projects />
      </div>
      <div className="p-5" ref={refs.contactForm}>
        <ContactForm />
      </div>
    </main>
  );
}
