import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Image from "next/image";

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
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

function Skeleton({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex justify-center flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      {children}
    </div>
  );
}

const items = [
  {
    title: "Lovelace",
    description: (
      <div>
        Mobile dating application built with Flutter and Flask, focused on
        implementing securities to prevent data breach.
        <div className="flex flex-row items-center mt-2">
          <AnimatedTooltip
            items={[
              {
                id: 1,
                title: "Flutter",
                description: "Client Side",
                image: "/logos/tech/flutter.svg",
              },
              {
                id: 2,
                title: "Flask",
                description: "Server Side",
                image: "/logos/tech/flask.svg",
              },
              {
                id: 3,
                title: "MongoDB",
                description: "Database",
                image: "/logos/tech/mongodb.svg",
              },
            ]}
          />
        </div>
      </div>
    ),
    header: (
      <Skeleton>
        <Image
          src="/screenshots/lovelace.webp"
          alt="flask blog secure screenshot"
          className="object-contain w-full h-full rounded-xl"
          width={254}
          height={182}
        />
      </Skeleton>
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
        Website application for blogs built with Flask, focused on complying
        with OWASP Top 10 and OWASP API Top 10 guidelines.
        <div className="flex flex-row items-center mt-2">
          <AnimatedTooltip
            items={[
              {
                id: 1,
                title: "Flask",
                description: "Full Stack",
                image: "/logos/tech/flask.svg",
              },
              {
                id: 2,
                title: "SQLite",
                description: "Database",
                image: "/logos/tech/sqlite.svg",
              },
            ]}
          />
        </div>
      </div>
    ),
    header: (
      <Skeleton>
        <Image
          src="/screenshots/flask-blog-secure.webp"
          alt="flask blog secure screenshot"
          width={254}
          height={182}
        />
      </Skeleton>
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
        Website application for hardware repair business built with Flask,
        focused on application development.
        <div className="flex flex-row items-center mt-2">
          <AnimatedTooltip
            items={[
              {
                id: 1,
                title: "Flask",
                description: "Full Stack",
                image: "/logos/tech/flask.svg",
              },
              {
                id: 2,
                title: "SQLite",
                description: "Database",
                image: "/logos/tech/sqlite.svg",
              },
            ]}
          />
        </div>
      </div>
    ),
    header: (
      <Skeleton>
        <Image
          src="/screenshots/vision-core.webp"
          alt="vision core screenshot"
          width={254}
          height={182}
        />
      </Skeleton>
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
];
