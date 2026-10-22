import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./loader.css"
function Loader(props) {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null);

  useEffect(() => {
    const duration = 5;
    const interval = 50;
    const increment = 50 / (duration * (500 / interval));

    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prev + increment;
      });
    }, interval);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    gsap.to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        loaderRef.current.style.display = "none";
      },
    });
  }, [progress]);
  return (
    <div ref={loaderRef} className="loader-container flex justify-center items-center h-screen w-screen absolute top-0 left-0">
      <div className="h-[20vh] w-[60vw] flex justify-center items-center">
        <span className=" font-bold font-[Halloween] text-3xl">Xitiz</span>

        <div className="logo-overlay z-10">
          <div className="h-[15vh] w-[20vw] flex items-center justify-center ">
            <img src="#" alt="#" />
          </div>
          <div className="flex justify-between items-center w-[20vw] mt-[1vw] ">
            <h1 className="text-[0.8vw] font-[Minecraft] text-white">Loading...</h1>
            <p className="text-[0.8vw] font-[Minecraft] text-white">{Math.round(progress)}%</p>
          </div>
        </div>
        <div className="loading-line">
          <div className="loading-progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
