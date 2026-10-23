import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./loader.css";
function Loader(props) {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null);

  useEffect(() => {
    const duration = 3;
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
    if (progress >= 100) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          loaderRef.current.style.display = "none";
        },
      });
    }
  }, [progress]);
  return (
    <div ref={loaderRef} className="loader-container flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-50">
      <div className="loader-content h-[20vh] w-[60vw] flex justify-center items-center">
        <span className="loader-name font-bold font-[Halloween] text-3xl mb-20">Xitiz</span>

        <div className="logo-overlay z-10">
          <div className="loader-label flex justify-between items-center w-[20vw] mt-[1vw]">
            <h1 className="font-[Minecraft]">Loading...</h1>
            <p className="font-[Minecraft]">{Math.round(progress)}%</p>
          </div>
        </div>
        <div className="loading-line ">
          <div className="loading-progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

export default Loader;
