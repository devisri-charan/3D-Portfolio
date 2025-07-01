import { BallCanvas } from "./canvas";
import {technologies} from "../constants";
import {SectionWrapper} from "../hoc";

const Technologies = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div key={technology.name} className="w-28 h-28">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Technologies,"technologies");