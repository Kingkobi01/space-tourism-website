import { useState } from "react";
import data from "../data/data.json";

interface Destination {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
}

const destinations: Destination[] = data.destinations;

const Destination = () => {
  const [dest, setDest] = useState<Destination>(destinations[0]);
  return (
    <div className="lg:before:bg-[url('./assets/destination/background-destination-desktop.jpg')] before:top-0 before:left-0 z-100 before:-z-30 before:absolute md:before:bg-[url('./assets/destination/background-destination-tablet.jpg')] before:bg-[url('./assets/destination/background-destination-mobile.jpg')] before:bg-cover mx-auto mt-[3rem] md:mt-[1rem] md:ml-auto w-[90%] md:w-[70%] lg:w-[80%] before:w-[100vw] before:h-full lg:min-h-screen text-center lg:text-start">
      <h5 className="my-[4rem]">
        <span className="text-secondary">01</span> Pick your destination
      </h5>
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-start gap-8 ml-auto lg:w-[95%] lg:text-start">
        <img className="lg:w-[30%]" src={dest.images.webp} alt="A moon" />
        <div className="flex flex-col items-center lg:items-start gap-8 w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start items-center lg:items-start gap-6 w-full text-center">
            {destinations.map((destination, idx) => (
              <h6
                key={idx}
                className={
                  destination === dest
                    ? "py-4 border-b-4 hover:text-secondary uppercase transition-all duration-200 cursor-pointer ease-in-out"
                    : "py-4 hover:text-secondary uppercase transition-all duration-200 cursor-pointer ease-in-out"
                }
                onClick={() => {
                  setDest(destinations[idx]);
                }}
              >
                {destination.name}
              </h6>
            ))}
          </div>
          <div>
            <h2 className="">{dest.name}</h2>
            <p className="lg:self-start md:mr-auto w-[38ch] md:w-[46ch] text-secondary text-sm md:text-md">
              {dest.description}
            </p>
          </div>
          <div className="flex justify-around lg:justify-between items-center py-4 border-t border-t-secondary/50 w-full">
            <div>
              <p className="font-condensed text-xs uppercase tracking-[4.75px]">
                Avg. distance
              </p>
              <p className="font-serif text-xl uppercase">{dest.distance}</p>
            </div>
            <div>
              <p className="font-condensed text-xs uppercase tracking-[4.75px]">
                Est. travel time
              </p>
              <p className="font-serif text-xl uppercase">{dest.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
