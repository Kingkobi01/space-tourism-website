import { AnimatePresence, motion as m } from "framer-motion";
import { useState } from "react";
import data from "../data/data.json";
interface Member {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

const crew: Member[] = data.crew;
const Crew = () => {
  const [member, setMember] = useState<Member>(crew[0]);
  return (
    <div className="lg:before:bg-[url('./assets/crew/background-crew-desktop.jpg')] before:top-0 before:left-0 z-100 before:-z-30 before:absolute md:before:bg-[url('./assets/crew/background-crew-tablet.jpg')] before:bg-[url('./assets/crew/background-crew-mobile.jpg')] before:bg-cover mx-auto mt-[3rem] md:mt-[1rem] md:ml-auto w-[90%] md:w-[70%] lg:w-[80%] before:w-[100vw] before:h-full lg:min-h-screen text-center lg:text-start">
      <h6 className="my-[4rem] md:text-start">
        <span className="mr-4 font-bold text-secondary/70">02</span>Meet your
        crew
      </h6>
      <div className="flex lg:flex-row md:flex-col flex-col-reverse justify-between items-center lg:items-stretch gap-8 ml-auto lg:w-[95%] lg:text-start">
        <div className="flex flex-col md:flex-col-reverse w-full h-full self-center">
          <div className="flex justify-between items-center mx-auto my-8 lg:mr-auto lg:ml-0 w-1/3">
            {crew.map((crewMember, idx) => (
              <span
                key={idx}
                onClick={() => {
                  setMember(crew[idx]);
                }}
                className={`${
                  member.name === crewMember.name
                    ? "bg-secondary w-3 aspect-square rounded-full"
                    : "bg-secondary/30 w-3 aspect-square rounded-full"
                } duration-200`}
              ></span>
            ))}
          </div>
          <div className="space-y-[1rem] md:space-y-[1.5rem] w-full">
            <div className="">
              <p className="font-serif text-secondary/50 text-sm md:text-lg uppercase">
                {member.role}
              </p>
              <p className="font-serif text-2xl md:text-[2.5rem] lg:text-xl uppercase">
                {member.name}
              </p>
            </div>
            <p className="mx-auto lg:self-start lg:mr-auto lg:ml-0 w-[38ch] md:w-[50ch] lg:w-[46ch] text-secondary text-sm md:text-md">
              {member.bio}
            </p>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <m.img
            key={member.images.webp}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ x: -100, opacity: 0 }}
            src={member.images.webp}
            className="lg:w-[50%] self-center"
            alt={member.name}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Crew;
