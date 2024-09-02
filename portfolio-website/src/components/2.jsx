import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import RedoAnimText from "./4";
import CursorBlinker from "./3";

// export interface IAnimTextProps {
//   delay: number;
// }

export default function AnimText({ delay }) {
  // const [done, setDone] = useState(false);
  const baseText = "";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
      
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="">
      <motion.span>{displayText}</motion.span>
      {/* {done && (
        <>
          <br /> <br />
        </>
      )} */}
      <RedoAnimText delay={delay + 1} />
      <CursorBlinker />
    </span>
  );
}
