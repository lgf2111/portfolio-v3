import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/utils/cn";
import React from "react";

export default function Testimonials() {
  return (
    <div className="">
      <h1 className="text-4xl">Testimonials</h1>
      <div className="p-12 flex items-center justify-center w-full">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Liang Shaoze",
    designation: "President at Orcus Consulting",
    content: (
      <p className="line-clamp-6">
        Jeff is really knowledgeable when it comes to
        <Highlight>full-stack web applications</Highlight>. Not only did he{" "}
        <Highlight> meet the given deadline</Highlight>, but also{" "}
        <Highlight>went the extra mile</Highlight>
        and <Highlight> added improvements to my UI design</Highlight>. Will
        definitely work with him in the future!
      </p>
    ),
  },
  {
    id: 1,
    name: "Chong Yang Bin",
    designation: "Director at SGWIFIMAN",
    content: (
      <p>
        Jeff had developed a<Highlight>website application</Highlight>
        for me and it <Highlight>works great</Highlight>.
      </p>
    ),
  },
];
