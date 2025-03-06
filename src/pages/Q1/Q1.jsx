import React, { useEffect, useState } from "react";
import s from "./Q1.module.css";
import { Link } from "react-router";

import ProgressBar from "../../components/ProgressBar";
import Hint from "../../components/Hint";
import Button from "../../components/Button";
import Wrapper from "../../components/Wrapper";
import RangeSlider from "../../components/RangeSlider";

import img3_9 from "../../assets/q1/3_9.png";
import img4_4 from "../../assets/q1/4_4.png";
import img5_0 from "../../assets/q1/5_0.png";
import img5_5 from "../../assets/q1/5_5.png";
import img5_8 from "../../assets/q1/5_8.png";
import img6_2 from "../../assets/q1/6_2.png";
import img6_7 from "../../assets/q1/6_7.png";

const Q1 = () => {
  const [currentImage, setCurrentImage] = useState(img5_5);
  const [rangeValue, setRangeValue] = useState(5.4);

  const handleChange = (e) => setRangeValue(e.target.value);

  const onClick = () => {
    sessionStorage.setItem(
      "quizData",
      JSON.stringify({ currentLength: rangeValue, currentImage })
    );
  };

  useEffect(() => {
    if (rangeValue < 4.3) setCurrentImage(img3_9);
    if (rangeValue < 5 && rangeValue > 4.3) setCurrentImage(img4_4);
    if (rangeValue < 5.5 && rangeValue > 5) setCurrentImage(img5_0);
    if (rangeValue < 5.8 && rangeValue > 5.5) setCurrentImage(img5_5);
    if (rangeValue < 6.2 && rangeValue > 5.8) setCurrentImage(img5_8);
    if (rangeValue < 6.7 && rangeValue > 6.2) setCurrentImage(img6_2);
    if (rangeValue > 6.7) setCurrentImage(img6_7);
  }, [rangeValue]);

  return (
    <Wrapper>
      <div className={s.header}>
        <ProgressBar width="33%" />
        <div className={s.headerContent}>
          <Link to="/">
            <div className={s.arrow}>
              <svg viewBox="0 0 24 24" focusable="false">
                <path
                  fill="#000"
                  d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                ></path>
              </svg>
            </div>
          </Link>
          <div className={s.counter}>1/3</div>
        </div>
      </div>
      <div className={s.body}>
        <p className={s.title}>Penis Size</p>
        <p className={s.subtitle}>How long is your penis in inches?</p>
        <RangeSlider
          handleChange={handleChange}
          tip="Length (inches)"
          min={3.8}
          max={6.9}
          step={0.1}
          defaultValue={5.4}
        />
        <div className={s.imageWrapper}>
          <img src={currentImage} alt="img" />
        </div>
        <Button route="/q2" text="NEXT" onClick={onClick} />
      </div>
      <div className={s.footer}>
        <Hint
          title="Did you know?"
          text="The average size of human penis is 6,5 inches"
        />
      </div>
    </Wrapper>
  );
};

export default Q1;
