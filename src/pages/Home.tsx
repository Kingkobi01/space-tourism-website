import { Explore } from "../components";

const Home = () => {
  return (
    <div className="lg:before:bg-[url('./assets/home/background-home-desktop.jpg')] before:top-0 before:left-0 z-100 before:-z-30 before:absolute flex lg:flex-row flex-col lg:justify-between items-center gap-[6rem] lg:gap-auto md:before:bg-[url('./assets/home/background-home-tablet.jpg')] before:bg-[url('./assets/home/background-home-mobile.jpg')] before:bg-cover mx-auto mt-[3rem] md:mt-[1rem] md:ml-auto w-[90%] md:w-[70%] lg:w-[80%] before:w-[100vw] before:h-full lg:min-h-screen text-center lg:text-start">
      <div className="flex flex-col items-center lg:items-start gap-[1rem] md:gap-[1.5rem] w-full lg:w-1/2">
        <h5 className="text-secondary">So, you want to travel to</h5>
        <h1 className="">Space</h1>
        <p className="mx-auto md:mr-auto w-[38ch] md:w-[46ch] text-secondary text-sm md:text-md">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Explore />
    </div>
  );
};

export default Home;

//
//

//
