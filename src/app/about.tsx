import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function About() {
  return (
    <div className="">
      <h1 className="text-4xl">About</h1>
      <CardContainer>
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Hi, I&apos;m Jeff Lee Guan Feng!
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            I am a software engineer with a Cybersecurity Diploma.
            <br />
            <br />I have passion for building scalable and maintainable
            software. I have experience in building web applications using T3
            Stack (TypeScript, Next.js, tRPC, Prisma and Tailwind CSS). I am
            also familiar with Flutter, Django, Flask.
            <br />
            <br /> I am currently working on a project that uses T3 Stack. I am
            always looking for opportunities to learn and grow as a developer.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/jeff-lee.webp"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
        </CardBody>
      </CardContainer>
    </div>
  );
}
