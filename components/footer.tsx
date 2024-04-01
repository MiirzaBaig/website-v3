"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="flex justify-center w-full flex-col items-center ">
      <div className="fixed bottom-0 w-full z-50">
        <svg
          className="hidden md:block absolute bottom-0 right-0 rotate-180 z-50 md:absolute "
          width="53"
          height="52"
          viewBox="0 0 53 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="dark:fill-black fill-blackout"
            d="M0 -5.35442e-05H52.1C52.1 -5.35442e-05 24.8947 -0.434101 12.4473 12.7519C2.67029e-05 25.938 0 51.8759 0 51.8759V-5.35442e-05Z"
          />
        </svg>

        <svg
          className="hidden md:block absolute left-0 bottom-0 -scale-x-100 rotate-180 z-50"
          width="53"
          height="52"
          viewBox="0 0 53 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="dark:fill-black fill-blackout"
            d="M0 -5.35442e-05H52.1C52.1 -5.35442e-05 24.8947 -0.434101 12.4473 12.7519C2.67029e-05 25.938 0 51.8759 0 51.8759V-5.35442e-05Z"
          />
        </svg>
      </div>
      <div className="bg-blackout p-20 pb-10 rounded-2xl mb-4 md:mb-20 text-whiteout flex flex-col gap-20 md:gap-0 items-center md:items-start md:grid md:grid-cols-4">
        <div className="w-[200px] flex flex-col items-center text-center md:items-start md:text-start">
          <h2 className="text-lg font-semibold">Socials</h2>
          <ul className="font-light gap-1 flex flex-col mt-2">
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://linkedin.com/in/philipp-parzer"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/philipp_parzer"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://youtube.com/philparzer"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/philipp_parzer"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/philipp_parzer"
              >
                Discord
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[200px] flex flex-col text-center md:items-start md:text-start">
          <h2 className="text-lg font-semibold">Some of my work</h2>
          <ul className="font-light gap-1 flex flex-col mt-2">
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://linkedin.com/in/philipp-parzer"
              >
                adlerlagune
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/philipp_parzer"
              >
                buoy
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://youtube.com/philparzer"
              >
                jotlog
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/philipp_parzer"
              >
                ampass
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 flex justify-end text-center md:items-start md:text-start">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Contact</h2>
            <div className=" font-light mt-2">
              <Link
                className="opacity-50 transition-opacity hover:opacity-100"
                href="mailto:parzerphilipp@gmail.com"
              >
                parzerphilipp@gmail.com
              </Link>
              <p>
                <Link
                  className="opacity-50 transition-opacity hover:opacity-100"
                  href="tel:+436605439322"
                >
                  +436605439322
                </Link>
              </p>
              <Link
                rel="noopener noreferrer"
                className="opacity-50 transition-opacity hover:opacity-100"
                target="_blank"
                href="https://www.google.com/maps/dir/48.218112,16.3971072/"
              >
                <p className="mt-2">Robertgasse 1</p>
                <p>1020, Vienna, Austria</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:mt-20 text-center md:items-start md:text-start md:-order-none order-first">
          <h2 className="font-semibold mb-2">Theme</h2>
          <div>
            <ThemeToggle />
          </div>
        </div>

        <div className="col-span-4 md:mt-10 text-sm text-center md:text-start">
          <p className="text-whiteout/50">
            this site is{" "}
            <Link
              className="underline decoration-2 text-whiteout/75 hover:text-whiteout/100"
              href="https://github.com"
            >
              open source
            </Link>
            <p>
              built with some of my favorite tools &mdash; {" "}
              <Link
                className="underline decoration-2 text-whiteout/75 hover:text-whiteout/100"
                href="https://nextjs.org"
                target="_blank"
              >
                next.js
              </Link>
              {", "}
              <Link
                className="underline decoration-2 text-whiteout/75 hover:text-whiteout/100"
                href="https://tailwindcss.com"
                target="_blank"
              >
                tailwind
              </Link>
              {", "}
              <Link
                className="underline decoration-2 text-whiteout/75 hover:text-whiteout/100"
                href="https://framer.com/motion"
                target="_blank"
              >
                framer motion
              </Link>
              {", "}and{" "}
              <Link
                className="underline decoration-2 text-whiteout/75 hover:text-whiteout/100"
                href="https://rive.app"
                target="_blank"
              >
                rive
              </Link>
            </p>
          </p>
          <div className="flex justify-between flex-wrap items-baseline text-center md:text-start">
            <p className="text-whiteout/50 md:w-auto w-full">
              if you have questions or inquiries,{" "}
              <Link
                href="mailto:hi@adlerlagune.com"
                className="underline decoration-2 text-whiteout/75 hover:text-whiteout/100"
              >
                reach out
              </Link>
            </p>
            <p className="text-xs opacity-50 text-center w-full mt-10 md:mt-0 md:w-auto">
              last update: SPRING2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
