import { counterItems } from "../constants";
import * as CountUpModule from "react-countup";

const CountUp = CountUpModule.default?.default || CountUpModule.default || CountUpModule;

const AnimatedCounter = () => {
  const renderCounter = (item) => {
    if (typeof CountUp === "function") {
      return <CountUp suffix={item.suffix} end={item.value} />;
    }
    return `${item.value}${item.suffix}`;
  };

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={item.label ? `${item.label}-${index}` : index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {renderCounter(item)}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;