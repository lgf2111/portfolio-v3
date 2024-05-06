import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";
import Image from "next/image";

export default function Experiences() {
  return (
    <div>
      <h1 className="text-4xl">Experiences</h1>
      <div className="w-full flex flex-wrap items-center justify-center py-5 gap-y-16">
        <PinContainer
          title="https://www.nyp.edu.sg/"
          href="https://www.nyp.edu.sg/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Nanyang Polytechnic
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Cybersecurity and Digital Forensics
              </span>
            </div>
            <Image
              src="/logos/nyp.webp"
              alt="Nanyang Polytechnic"
              className="rounded-lg w-full mt-4 aspect-video"
              width={288}
              height={162}
            />
            <span className="mt-3">05/2021 - 05/2024</span>
          </div>
        </PinContainer>
        <PinContainer
          title="https://www.strategygroup.gov.sg/"
          href="https://www.strategygroup.gov.sg/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Prime Minister Office - Strategy Group
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Digital Business Analyst Intern
              </span>
            </div>
            <Image
              src="/logos/pmosg.webp"
              alt="pmosg"
              className="rounded-lg w-full mt-4 aspect-video object-contain bg-white p-5"
              width={288}
              height={162}
            />
            <span className="mt-3">02/2023 - 08/2023</span>
          </div>
        </PinContainer>
        <PinContainer
          title="https://orcusconsulting.com/"
          href="https://orcusconsulting.com/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Orcus Consulting
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Co-Founder & Vice President
              </span>
            </div>
            <Image
              src="/logos/orcus.webp"
              alt="pmosg"
              className="rounded-lg w-full mt-4 aspect-video object-contain"
              width={288}
              height={162}
            />
            <span className="mt-3">11/2023 - Present</span>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
