import React, { useState } from "react";
import { Link } from "react-router";
import s from "./Q2.module.css";

import Wrapper from "../../components/Wrapper";
import ProgressBar from "../../components/ProgressBar";
import RangeSlider from "../../components/RangeSlider";
import Button from "../../components/Button";
import Hint from "../../components/Hint";

const Q2 = () => {
  const [desiredLength, setDesiredLength] = useState(5.4);
  const [age, setAge] = useState(54);

  const handleChangeLength = (e) => setDesiredLength(e.target.value);
  const handleChangeAge = (e) => setAge(e.target.value);

  const currentState = JSON.parse(sessionStorage.getItem("quizData"));

  const handleClick = () =>
    sessionStorage.setItem(
      "quizData",
      JSON.stringify({ ...currentState, desiredLength, age })
    );

  return (
    <Wrapper>
      <div className={s.header}>
        <ProgressBar width="66%" />
        <div className={s.headerContent}>
          <Link to="/q1">
            <div className={s.arrow}>
              <svg viewBox="0 0 24 24" focusable="false">
                <path
                  fill="#000"
                  d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                ></path>
              </svg>
            </div>
          </Link>
          <div className={s.counter}>2/3</div>
        </div>
      </div>
      <div className={s.body}>
        <p className={s.title}>Desired Penis Enlargement and Age</p>
        <p className={s.subtitle}>
          In order to calculate your enlargement parameters, we need to know how
          old you are and how long you want to grow your penis by. All the data
          is processed anonymously, with only you having access to the results
        </p>
        <RangeSlider
          handleChange={handleChangeLength}
          tip="Increase by (inches)"
          min={3.8}
          max={6.9}
          step={0.1}
          defaultValue={5.4}
        />
        <RangeSlider
          handleChange={handleChangeAge}
          tip="Age (years)"
          min={18}
          max={90}
          step={1}
          defaultValue={54}
        />
        <Button route="/q3" text="NEXT" onClick={handleClick} />
      </div>
      <div className={s.footer}>
        <Hint
          title="Did you know?"
          text="Tinder Hero works equally effectively at any age."
        />
      </div>
    </Wrapper>
  );
};

export default Q2;
