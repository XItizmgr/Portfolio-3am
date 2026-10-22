import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

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
  return <div></div>;
}

export default Loader;
