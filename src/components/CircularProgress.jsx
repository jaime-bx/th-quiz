import { useEffect, useState } from "react";
import s from "./CircularProgress.module.css";

const CircularProgress = ({setReady}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setProgress(100);
        setReady(true)
        clearInterval(timer);
      } else {
        setProgress(start);
      }
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={s.wrapper}>
        <div className={s.container}>
      <svg viewBox="0 0 100 100">
        <circle
          className="text-gray-200"
          strokeWidth="6"
          stroke="#d1d5db"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        <circle
          className="text-green-500"
          strokeWidth="6"
          strokeLinecap="round"
          stroke="#029935"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 - (progress / 100) * 251.2}
          transform="rotate(-90 50 50)"
          style={{ transition: "stroke-dashoffset 0.02s linear" }}
        />
      </svg>
      <div className={s.percentages}>
        {Math.round(progress)}%
      </div>
      </div>
    </div>
  );
};

export default CircularProgress;