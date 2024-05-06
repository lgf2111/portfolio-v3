import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import React from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLInputElement;
    emailjs
      .send(
        "service_29ss0un",
        "template_1z5rpin",
        {
          from_name: name.value,
          from_email: email.value,
          message: message.value,
        },
        {
          publicKey: "UNCtgHQfbRqGb8CUA",
        }
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  function SocialMediaButton({
    href,
    Icon,
    text,
  }: {
    href: string;
    Icon: React.ElementType;
    text: string;
  }) {
    return (
      <a
        href={href}
        target="_blank"
        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        type="submit"
      >
        <Icon className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
          {text}
        </span>
        <BottomGradient />
      </a>
    );
  }

  return (
    <div className="">
      <h1 className="text-4xl">Contact</h1>
      <div className="max-w-lg w-full mx-auto my-6 rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Contact Me
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Interested in working together? Fill out the form below.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Jeff Lee" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="lgf2111@gmail.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Hi Jeff..." />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Connect Me
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Connect with me via social media.
          </p>
          <div className="flex flex-col space-y-4 my-8">
            <SocialMediaButton
              href="https://www.linkedin.com/lee-guan-feng"
              Icon={IconBrandLinkedin}
              text="Linkedin"
            />
            <SocialMediaButton
              href="https://www.github.com/lgf2111"
              Icon={IconBrandGithub}
              text="Github"
            />
            <SocialMediaButton
              href="https://www.instagram.com"
              Icon={IconBrandInstagram}
              text="Instagram"
            />
            <SocialMediaButton
              href="https://t.me/lgf2111"
              Icon={IconBrandTelegram}
              text="Telegram"
            />
            <SocialMediaButton
              href="https://wa.me/6588128123"
              Icon={IconBrandWhatsapp}
              text="Whatsapp"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
