import React from "react";
import ReactLenis, { useLenis } from "lenis/react";
import Loader from "./components/Loader";
export function App() {
  const lenis = useLenis();

  return (
    <ReactLenis root>
      <div className="w-full bg-(--) text-white select-none">
        <Loader />
      </div>
    </ReactLenis>
  );
}
