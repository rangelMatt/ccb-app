import React, { useState, useEffect } from "react";

export default function useWindowSize() {
  // if (typeof window !== "undefined") {
  //   return { width: 1200, height: 800 };
  // }

  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  useEffect(() => {
    windowSize.addEventListener("resize", () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    })
    return () => {
      windowSize.removeEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      })
    };
  }, []);
  return windowSize;
}