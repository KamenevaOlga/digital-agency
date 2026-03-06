import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<
    "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | ""
  >("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenSize("xs");
      } else if (width < 768) {
        setScreenSize("sm");
      } else if (width < 1024) {
        setScreenSize("md");
      } else if (width < 1280) {
        setScreenSize("lg");
      } else if (width < 1536) {
        setScreenSize("xl");
      } else {
        setScreenSize("2xl");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
