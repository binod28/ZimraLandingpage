import React, { useEffect, useState } from "react";

const useTypeWriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text.charAt(currentIndex));
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearTimeout(timer);
      }
    }, speed);
    return () => {
      clearTimeout(timer);
    };
  }, [text, currentIndex]);

  return displayText;
};

export default useTypeWriter;
