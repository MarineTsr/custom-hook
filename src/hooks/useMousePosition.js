import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (event) => {
      setPosition({ x: event.pageX, y: event.pageY });
    };

    window.addEventListener("mousemove", update);

    return () => window.removeEventListener("mosemove", update);
  }, []);

  return { x: position.x, y: position.y };
};
