import React, { useEffect, useState } from "react";
import s from "./ResultsPage.module.css";
import img6_7 from "../../assets/q1/6_7.png";
import Wrapper from "../../components/Wrapper";
import ResultsGraphic from "../../components/ResultsGraphic";

const ResultsPage = () => {
  const [data, setData] = useState({});

  const lengthDiff = (data.desiredLength - data.currentLength).toFixed(2);

  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 11);
  const formattedFutureDate = futureDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const results = JSON.parse(sessionStorage.getItem("quizData"));
    if (results) {
      setData(results);
    }
  }, []);

  return (
    <>
      <Wrapper>
        <p className={s.headerText}>
          Once you start using Tinder Hero, you’ll be able to increase your
          penis by {lengthDiff} inches, reaching a total of {data.desiredLength}{" "}
          inches within the next 11 days, between{" "}
          <span className={s.gradient}>{formattedCurrentDate}</span> and{" "}
          <span className={s.gradient}>{formattedFutureDate}</span>
        </p>
        <div className={s.resultImages}>
          <div className={s.before}>
            <div className={s.imgThumbLeft}>
              <img src={data.currentImage} alt="" />
            </div>
            <div className={s.thumb}>Now</div>
            <div>
              <div>Penis Length</div>
              <div className={s.red}>{data.currentLength} inches</div>
            </div>
            <div className={s.datesBefore}>
              <div>
                <div>{formattedCurrentDate}</div>
              </div>
            </div>
          </div>
          <div className={s.after}>
            <div className={s.imgThumbRight}>
              <img src={img6_7} alt="" />
            </div>
            <div className={s.thumb}>
              <b>11 days later</b>
            </div>
            <div>
              <div>
                <b>Penis Length</b>
              </div>
              <div className={s.green}>
                <b>{data.desiredLength} inches</b>
              </div>
            </div>
            <div className={s.datesAfter}>
              <div>
                <div>{formattedFutureDate}</div>
              </div>
            </div>
          </div>
        </div>
        <ResultsGraphic
          startValue={data.currentLength}
          endValue={data.desiredLength}
        />
      </Wrapper>
    </>
  );
};

export default ResultsPage;
