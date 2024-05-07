"use client";

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Jeff Lee
              </span>
            </a>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Last updated: 7 May 2024
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Portfolios
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                <li>
                  <a
                    href="https://portfolio-v1.lgf2111.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Version 1
                  </a>
                </li>
                <li>
                  <a
                    href="https://portfolio-v2.lgf2111.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Version 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Version 3 (Current)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://lgf2111.com/" className="hover:underline">
              Jeff Lee
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-2">
            <a
              href="https://www.linkedin.com/in/lee-guan-feng/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
            >
              <IconBrandLinkedin className="size-4" />
              <span className="sr-only">Linkedin</span>
            </a>
            <a
              href="https://www.github.com/lgf2111"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
            >
              <IconBrandGithub className="size-4" />
              <span className="sr-only">Github</span>
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
            >
              <IconBrandInstagram className="size-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://t.me/lgf2111"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
            >
              <IconBrandTelegram className="size-4" />
              <span className="sr-only">Telegram</span>
            </a>
            <a
              href="https://wa.me/65881281231"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
            >
              <IconBrandWhatsapp className="size-4" />
              <span className="sr-only">Whatsapp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
