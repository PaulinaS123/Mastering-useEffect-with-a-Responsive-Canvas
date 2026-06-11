import { useState, useEffect } from "react";

function ResponsiveCard() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function removes the listener when the component unmounts.
    // This prevents memory leaks and duplicate event listeners.
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // Empty dependency array means this effect runs only once
    // when the component mounts. Without it, the listener would
    // be added again after every render.
  }, []);

  const isMobile = windowSize.width < 768;

  return (
    <div
      className="card"
      style={{
        backgroundColor: isMobile ? "#ffcccb" : "#add8e6",
      }}
    >
      <h1>{isMobile ? "Mobile View" : "Desktop View"}</h1>

      <p>
        Width: <strong>{windowSize.width}px</strong>
      </p>

      <p>
        Height: <strong>{windowSize.height}px</strong>
      </p>
    </div>
  );
}

export default ResponsiveCard;
