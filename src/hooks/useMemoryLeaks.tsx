import { useEffect, useState } from "react";

export const useMemoryLeaks = () => {
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    const handleHover = () => setHovered(true);
    window.addEventListener("mousemove", handleHover);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleHover);
    };
  }, []);

  return {
    count,
    hovered,
  };
};
