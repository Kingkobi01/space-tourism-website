import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect, useState } from "react";

import data from "../data/data.json";

interface Tech {
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
}
const technologies: Tech[] = data.technology;

const Technology = () => {
  const [Tech, setTech] = useState<Tech>(technologies[0]);
  useEffect(() => {
    console.log(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <div className="lg:before:bg-[url('./assets/technology/background-technology-desktop.jpg')] before:top-0 before:left-0 z-100 before:-z-30 before:absolute md:before:bg-[url('./assets/technology/background-technology-tablet.jpg')] before:bg-[url('./assets/technology/background-technology-mobile.jpg')] before:bg-cover mx-auto mt-[3rem] md:mt-[1rem] md:ml-auto w-full md:w-[70%] lg:w-[80%] before:w-[100vw] before:h-full lg:min-h-screen text-center lg:text-start">
      <h6 className="my-[4rem] md:text-start">
        <span className="mr-4 font-bold text-secondary/70">03</span>Space launch
        101
      </h6>
      <div className="flex lg:flex-row-reverse flex-col justify-between items-center gap-8 lg:gap-24 w-screen lg:w-full outline">
        <AnimatePresence mode="wait">
          <m.img
            key={Tech.name}
            initial={
              window.innerWidth <= 500
                ? { x: 100, opacity: 0 }
                : { y: 100, opacity: 0 }
            }
            animate={
              window.innerWidth <= 500
                ? { x: 0, opacity: 1 }
                : { y: 0, opacity: 1 }
            }
            transition={{ duration: 0.3 }}
            exit={
              window.innerWidth <= 500
                ? { x: -100, opacity: 0 }
                : { y: -100, opacity: 0 }
            }
            src={
              window.innerWidth <= 500
                ? Tech.images.landscape
                : Tech.images.portrait
            }
            className="w-full object-center object-cover"
            alt={Tech.name}
          />
        </AnimatePresence>

        <div className="flex lg:flex-row flex-col gap-8 lg:gap-16">
          <div className="flex lg:flex-col justify-center items-center gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                onClick={() => setTech(tech)}
                className={
                  Tech.name === tech.name
                    ? "border-secondary hover:border-white border rounded-full w-[2.5rem] md:w-[3.75rem] lg:w-[5rem] aspect-square bg-white text-primary grid place-items-center"
                    : "border-secondary hover:border-white border rounded-full w-[2.5rem] md:w-[3.75rem] lg:w-[5rem] aspect-square grid place-items-center"
                }
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="">
            <p className="pb-2 text-secondary/70 text-sm uppercase tracking-[2.75px]">
              the technology...
            </p>
            <p className="pb-4 lg:pb-8 font-serif text-2xl md:text-[2rem] lg:text-[3.75rem] uppercase">
              {Tech.name}
            </p>
            <p className="mx-auto lg:self-start lg:mr-auto lg:ml-0 w-[38ch] md:w-[50ch] lg:w-[46ch] text-secondary text-sm md:text-md">
              {Tech.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
