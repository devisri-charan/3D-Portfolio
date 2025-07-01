import { useMemo } from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

// Helper to detect mobile
const isMobile = () => window.innerWidth <= 768;

const Technologies = () => {
  // Memoize the selection so it doesn't change on every render
  const techList = useMemo(() => {
    if (isMobile()) {
      // On mobile or small screens, show only the first 6 technologies
      return technologies.slice(0, 7);
    }
    // On desktop, show all technologies
    return technologies;
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {techList.map((technology) => (
        <div key={technology.name} className="w-28 h-28">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Technologies, "technologies");
