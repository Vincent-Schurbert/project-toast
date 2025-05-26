import React from "react";

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    if (!callback) return;

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [callback]);
};
