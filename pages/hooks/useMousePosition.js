import { useState, useMemo, useEffect } from "react";

const useMousePosition = () => {
  const [mouse, setMouse] = useState({left: 0, top: 0});

  const onMouse = ({clientX, clientY}) => {
    setMouse({left: clientX, top: clientY});
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouse);

    return () => {
      window.removeEventListener('mousemove', onMouse);
    };
  });

  return mouse;
}

export default useMousePosition;