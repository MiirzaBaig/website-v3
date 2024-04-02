"use client";

import TitledParagraph from "@/components/titled-paragraph";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface PageProps {}

const Page = ({}: PageProps) => {
  const [isTLDRShown, setIsTLDRShown] = useState(false);
  const [isHoveringOverTrud, setIsHoveringOverTrud] = useState(false);

  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          application
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Design Engineer</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">Tailwind Labs</span>
        </h1>
        <button
          onClick={() => {
            setIsTLDRShown(!isTLDRShown);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-base sm:text-[20px] sm:sticky mt-6 sm:mt-0 sm:top-9 z-10 bg-white dark:bg-blackout border dark:border-whiteout/50 rounded-md px-2 sm:px-3 py-0.5 border-blackout"
        >
          {!isTLDRShown
            ? "Too much text? show TLDR"
            : "More Details? show everything"}
        </button>

        <div className="flex flex-col gap-10 mt-10 text-blackout/90 dark:text-whiteout/90">
          {isTLDRShown ? (
            <TitledParagraph title="TLDR">
              <div className="flex flex-col gap-6">
                <p>
                  I’m Phil, a freelance fullstack dev based in Vienna, Austria
                  UTC+1.
                </p>
                <p>
                  I love to design in Figma and Blender, know how to animate 2D
                  + 3D and use TailwindCSS with NextJS and Typescript for all my
                  frontend needs.
                </p>
                <p>
                  I grew up bilingually (English, German) and picked up Russian
                  along the way. I'm a very outgoing and talkative person.
                </p>
                <p>
                  The posting got me really excited. Working for Tailwind Labs,
                  I’d love to build out landing pages or components like the
                  ones you mentioned in the job posting, maybe help you with
                  docs for 4.0? as I love to explain stuff or just tackle any
                  task you throw at me!
                </p>
              </div>
            </TitledParagraph>
          ) : (
            <>
              <TitledParagraph title="About">
                <p>
                  Hi, I’m Phil. I’ve always had a thing for design, but
                  somewhere in my teens, I realized that traditional drawing, 3D
                  and 2D design just didn’t cut it for me anymore. I needed
                  something more. Building actual things with code was the
                  answer.
                </p>
              </TitledParagraph>
              <TitledParagraph title="journey">
                <p>
                  My adventure began with C# and Unity, and from there, it was a
                  bit of a rollercoaster—I dabbled in embedded, and Swift,
                  improving my understanding of low-level programming, then got
                  my hands dirty exploring the endless possibilities Rust and
                  Python during my uni days, and eventually made my way to JS,
                  TS, and CSS.
                </p>
              </TitledParagraph>
              <TitledParagraph title="webdev">
                <p>
                  Web development, and CSS specifically, seemed rough at first
                  but I immediately fell in love with the endless possibilities
                  and ways you can go off the beaten path easily. I had finally
                  found a platform that let me design stuff, and share it with
                  anyone, anywhere, instantly. I've been working professionally
                  in webdev for 5 years now and plan on doing so for a long
                  time. Web always wins.
                </p>
              </TitledParagraph>
              <hr className="border-blackout dark:border-whiteout opacity-25" />
              <TitledParagraph title="tailwind 1">
                <p>
                  I have a pretty vivid memory of my first encounter with
                  Tailwind in the wild. Similar to Typescript I was a bit
                  cautious at first. But after trying it once, I’ve never looked
                  back. All the context switching - gone. Fighting over
                  classnames and dreading redesigns when working in teams -
                  gone. Weird CSS quirks - way less.
                </p>
              </TitledParagraph>
              <TitledParagraph title="tailwind 2">
                <p>
                  But one thing about Tailwind is even bigger for me,
                  personally: I love to build solo, working for agencies or
                  building out MVPs completely on my own. What Tailwind has
                  enabled me to do was to design in code. Usually, I sketch out
                  a first prototype of the design in Figma, but move to code
                  pretty early-on and what happens is, I refine the design
                  in-code. I’ve tried many CSS frameworks but only Tailwind
                  allowed me to enter this specific design-code flow state.
                </p>
              </TitledParagraph>
              <TitledParagraph title="tailwind 3">
                <p>
                  Tailwind has also upped my CSS game in general. Your guys'
                  docs are incredible at explaining all the different features,
                  and I find myself checking them even if I’m forced to use a
                  different CSS framework. Beyond just using Tailwind in my own
                  projects, I've also had the pleasure of introducing it to devs
                  I've worked with. Many were skeptical or unsure at first, but
                  through hands-on demonstrations they came around pretty
                  quickly. Some of them have even become Tailwind enthusiasts
                  themselves.
                </p>
              </TitledParagraph>
              <hr className="border-blackout dark:border-whiteout opacity-25" />
              <TitledParagraph title="what I do">
                <p>
                  Currently, I’m based in Vienna, Austria (UTC+1), working as a
                  freelance fullstack engineer. I founded my own company{" "}
                  <Link
                    href="https://adlerlagune.com"
                    target="_blank"
                    className="underline inline-flex dark:text-whiteout/100 gap-1 items-center font-semibold text-blackout/100"
                  >
                    adlerlagune
                    <ExternalLink strokeWidth={3} width={20} />
                  </Link>{" "}
                  in December last year and have tackled several clients
                  projects since. Software isn’t the only thing I offer at
                  adlerlagune: I also do 3D design and animation using primarily
                  Blender and 2D design and motion graphics using the Adobe
                  Suite and Rive / Figma. In addition, I work closely with
                  Austrian software development and marketing agencies as a
                  part-time CTO / lead-dev. There, I help them build out
                  projects, prototype infrastructure, and jump in when shit hits
                  the fan.
                </p>
              </TitledParagraph>
              <TitledParagraph title="teamplay">
                <p>
                  Although I feel like I’m fastest when I work solo, I have
                  plenty of experience working in small to medium sized teams in
                  agile and non-agile environments. I know how to explain
                  technical details to non-tech stakeholders, know how to
                  navigate design hand-offs, and other critical situations.
                </p>
              </TitledParagraph>
              <TitledParagraph title="comms">
                <p>
                  I’m a very outgoing and talkative person that often comes
                  across as non-tech at first. I know my way around non-tech as
                  well as tech people and enjoy bridging the gap. I grew up
                  bilingually (English C2, German C2) and picked up Russian (B2)
                  along the way.
                </p>
              </TitledParagraph>
              <TitledParagraph title="side projects">
                <p>
                  I'm addicted to side projects. My most recent completed
                  project is{" "}
                  <Link
                    href="https://mypoca.com"
                    target="_blank"
                    className="underline inline-flex dark:text-whiteout/100 gap-1 items-center font-semibold text-blackout/100"
                  >
                    poca
                    <ExternalLink strokeWidth={3} width={20} />
                  </Link>{" "}
                  : social media meets page builder. Rn, I’m working on{" "}
                  <span
                    onPointerEnter={() => setIsHoveringOverTrud(true)}
                    onPointerLeave={() => setIsHoveringOverTrud(false)}
                    className="relative inline-flex dark:text-whiteout/100 gap-1 items-center font-semibold text-blackout/100"
                  >
                    <AnimatePresence>
                      {isHoveringOverTrud && (
                        <motion.span
                          initial={{ scale: 0, rotate: 12 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 12 }}
                          className="absolute -top-10 -right-[160px] w-[200px]"
                        >
                            <span className="font-normal text-base pl-1 absolute">not live yet</span>
                          <Image
                            src="/other/trud.png"
                            alt="trud side project"
                            width={608}
                            height={464}
                          />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    trud
                  </span>
                  : certificates for everything human (digital certificates that
                  proof that a piece of work has been created by you, and not
                  AI). With each side project I try to force myself to pick at
                  least one new tech or framework. I don't really get the
                  sentiment of "too many decisions" when it comes to webdev.
                  Without iteration, there's no progress. A new JS framework a
                  day is a good thing.
                </p>
              </TitledParagraph>
              <TitledParagraph title="this job">
                <p>
                  Honestly, I’ve never been as excited about a job posting.
                  Working for Tailwind Labs, a company who’s product I use
                  literally every day and that’s transformed my professional
                  life would be nothing short of amazing. If I get the chance
                  I’d love to build out landing pages like the ones you
                  mentioned in the job posting, maybe help you with docs for
                  4.0? as I love to explain stuff or just tackle any task you
                  throw at me!
                </p>
              </TitledParagraph>
            </>
          )}
          <p className="text-[20px] my-20">
            Thanks for reading this. Love your work, keep it up!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;
