import React from "react";
import Image from "next/image";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Projects() {
  return (
    <div className="">
      <h1 className="text-4xl">Projects</h1>
      <BentoGrid className="max-w-4xl mx-auto py-5">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

function Skeleton({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex justify-center flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <Image
        src={src}
        alt={alt}
        className="object-contain w-full h-full aspect-video rounded-xl border-2 border-neutral-200 dark:border-neutral-800"
        width={254}
        height={182}
      />
      {children}
    </div>
  );
}

const tech = {
  flutter: {
    title: "Flutter",
    description: "Client Side",
    image: "/logos/tech/flutter.svg",
  },
  flask: {
    title: "Flask",
    description: "Server Side",
    image: "/logos/tech/flask.svg",
  },
  flaskFS: {
    title: "Flask",
    description: "Full Stack",
    image: "/logos/tech/flask.svg",
  },
  mongodb: {
    title: "MongoDB",
    description: "Database",
    image: "/logos/tech/mongodb.svg",
  },
  sqlite: {
    title: "SQLite",
    description: "Database",
    image: "/logos/tech/sqlite.svg",
  },
  bootstrap: {
    title: "Bootstrap",
    description: "Styling",
    image: "/logos/tech/bootstrap.svg",
  },
  stripe: {
    title: "Stripe",
    description: "Payment Gateway",
    image: "/logos/tech/stripe.svg",
  },
  tailwindcss: {
    title: "Tailwind CSS",
    description: "Styling",
    image: "/logos/tech/tailwindcss.svg",
  },
  react: {
    title: "React",
    description: "Front End",
    image: "/logos/tech/react.svg",
  },
  sass: {
    title: "Sass",
    description: "Styling",
    image: "/logos/tech/sass.svg",
  },
  sentry: {
    title: "Sentry",
    description: "Error Tracking",
    image: "/logos/tech/sentry.svg",
  },
  prometheus: {
    title: "Prometheus",
    description: "Monitoring",
    image: "/logos/tech/prometheus.svg",
  },
  docker: {
    title: "Docker",
    description: "Containerization",
    image: "/logos/tech/docker.svg",
  },
  django: {
    title: "Django",
    description: "Full Stack",
    image: "/logos/tech/django.svg",
  },
  vitejs: {
    title: "Vite.js",
    description: "Front End",
    image: "/logos/tech/vitejs.svg",
  },
  threejs: {
    title: "Three.js",
    description: "3D Graphics",
    image: "/logos/tech/threejs.svg",
  },
  openai: {
    title: "OpenAI",
    description: "AI",
    image: "/logos/tech/openai.svg",
  },
};

const items = [
  {
    title: "Lovelace",
    description: (
      <div>
        <div className="min-h-12">
          Mobile dating application built with Flutter and Flask, focused on
          implementing securities to prevent data breach.
        </div>
        <div className="flex flex-row items-center mt-2">
          <AnimatedTooltip
            items={[
              tech.flutter,
              tech.flask,
              tech.mongodb,
              tech.prometheus,
              tech.docker,
            ]}
          />
        </div>
      </div>
    ),
    header: (
      <Skeleton
        src="/screenshots/lovelace.webp"
        alt="flask blog secure screenshot"
      />
    ),
    icon: (
      <Image
        src="/logos/lovelace.webp"
        className="size-4"
        width={16}
        height={16}
        alt="lovelace logo"
      />
    ),
  },
  {
    title: "Flask Blog Secure",
    description: (
      <div>
        <div className="min-h-12">
          Website application for blogs built with Flask, focused on complying
          with OWASP Top 10 and OWASP API Top 10 guidelines.
        </div>
        <div className="flex flex-row items-center mt-2">
          <AnimatedTooltip
            items={[
              tech.flaskFS,
              tech.stripe,
              tech.sentry,
              tech.sqlite,
              tech.bootstrap,
            ]}
          />
        </div>
      </div>
    ),
    header: (
      <Skeleton
        src="/screenshots/flask-blog-secure.webp"
        alt="flask blog secure screenshot"
      />
    ),
    icon: (
      <Image
        src="/logos/flask-blog-secure.webp"
        className="size-4"
        alt="flask blog secure logo"
        width={16}
        height={16}
      />
    ),
  },
  {
    title: "Vision Core",

    description: (
      <div>
        <div className="min-h-12">
          Website application for hardware repair business built with Flask,
          focused on application development.
        </div>
        <div className="flex flex-row items-center mt-2">
          <AnimatedTooltip
            items={[
              tech.flaskFS,
              tech.stripe,
              tech.sqlite,
              tech.tailwindcss,
              tech.bootstrap,
            ]}
          />
        </div>
      </div>
    ),
    header: (
      <Skeleton
        src="/screenshots/vision-core.webp"
        alt="vision core screenshot"
      />
    ),
    icon: (
      <Image
        src="/logos/vision-core.webp"
        className="size-4"
        alt="vision core logo"
        width={16}
        height={16}
      />
    ),
  },
  {
    title: "Timer Plus",

    description: (
      <div>
        <div className="min-h-12">
          Timer application built with React, focused on saying the amount of
          time left on countdown.
        </div>
        <div className="flex flex-row items-center mt-2">
          <AnimatedTooltip items={[tech.react, tech.sass]} />
        </div>
      </div>
    ),
    header: (
      <Skeleton
        src="/screenshots/timer-plus.webp"
        alt="timer plus screenshot"
      />
    ),
    icon: (
      <Image
        src="/logos/timer-plus.webp"
        className="size-4"
        alt="timer plus logo"
        width={16}
        height={16}
      />
    ),
  },
  {
    title: "Django Store",
    description: (
      <div>
        <div className="min-h-12">
          Website application e-commerce platform built With Django.
        </div>
        <div className="flex flex-row items-center mt-2">
          <AnimatedTooltip items={[tech.django, tech.bootstrap]} />
        </div>
      </div>
    ),
    header: (
      <Skeleton
        src="/screenshots/django-store.webp"
        alt="timer plus screenshot"
      />
    ),
    icon: (
      <Image
        src="/logos/django-store.webp"
        className="size-4"
        alt="timer plus logo"
        width={16}
        height={16}
      />
    ),
  },
  {
    title: "The Solar System",
    description: (
      <div>
        <div className="min-h-12">View the solar system in 3D.</div>
        <div className="flex flex-row items-center mt-2">
          <AnimatedTooltip items={[tech.vitejs, tech.threejs]} />
        </div>
      </div>
    ),
    header: (
      <Skeleton
        src="/screenshots/the-solar-system.webp"
        alt="timer plus screenshot"
      />
    ),
    icon: (
      <Image
        src="/logos/the-solar-system.webp"
        className="size-4"
        alt="timer plus logo"
        width={16}
        height={16}
      />
    ),
  },
  {
    title: "Career Meet",
    description: (
      <div>
        <div className="min-h-12">Meetup, with University Students.</div>
        <div className="flex flex-row items-center mt-2">
          <AnimatedTooltip items={[tech.django, tech.bootstrap]} />
        </div>
      </div>
    ),
    header: (
      <Skeleton
        src="/screenshots/career-meet.webp"
        alt="timer plus screenshot"
      />
    ),
    icon: (
      <Image
        src="/logos/career-meet.webp"
        className="size-4"
        alt="timer plus logo"
        width={16}
        height={16}
      />
    ),
  },
  {
    title: "Lecture Summariser",
    description: (
      <div>
        <div className="min-h-12">
          Upload your lecture videos and we will summarize them for you.
        </div>
        <div className="flex flex-row items-center mt-2">
          <AnimatedTooltip items={[tech.openai, tech.django, tech.bootstrap]} />
        </div>
      </div>
    ),
    header: (
      <Skeleton
        src="/screenshots/lecture-summariser.webp"
        alt="timer plus screenshot"
      />
    ),
    icon: (
      <Image
        src="/logos/lecture-summariser.webp"
        className="size-4"
        alt="timer plus logo"
        width={16}
        height={16}
      />
    ),
  },
];
