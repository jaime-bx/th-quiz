import React, { useEffect, useState } from "react";
import s from "./ResultsPage.module.css";
import img6_7 from "../../assets/q1/6_7.png";
import th_img from "../../assets/th_img.png";
import Wrapper from "../../components/Wrapper";
import ResultsGraphic from "../../components/ResultsGraphic";
import Reviews from "../../components/Reviews";
import reviewsData from "../../reviewsData";

const ResultsPage = () => {
  const [data, setData] = useState({});

  const { currentLength, increaseLength } = data;

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
  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  const formattedNextday = nextDay.toLocaleDateString("en-US", {
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
    <div>
      <Wrapper>
        <p className={s.headerText}>
          Once you start using Tinder Hero, you’ll be able to increase your
          penis by {increaseLength} inches, reaching a total of{" "}
          {currentLength + increaseLength} inches within the next 11 days, between{" "}
          <span className={s.gradient}>{formattedCurrentDate}</span> and{" "}
          <span className={s.gradient}>{formattedFutureDate}</span>
        </p>
        <div className={s.resultImages}>
          <div className={s.before}>
            <div className={s.imgThumbLeft}>
              <img src={data.currentImage} alt="" />
            </div>
            <div className={s.thumb}>Now</div>
            <div className={s.text}>
              <div>Penis Length</div>
              <div className={s.red}>{currentLength} inches</div>
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
              <div className={s.text}>
                <b>Penis Length</b>
              </div>
              <div className={s.green}>
                <b>{currentLength + increaseLength} inches</b>
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
          startValue={currentLength}
          endValue={currentLength + increaseLength}
        />
      </Wrapper>
      <h3 className={s.recTitle}>Your personal product recommendation</h3>
      <div className={s.recommendation}>
        <div className={s.recTextWrapper}>
          <h4 className={s.recCardTitle}>Best Offer</h4>
          <p className={s.recText}>
            <span className={s.mb10}>
              You’re part of the{" "}
              <span className={s.gradient}>
                <b>target audience!</b>
              </span>
            </span>
            <br />
            Users aged {data.age - 5} - {data.age + 5} are entitled to a{" "}
            <b>50% discount</b> for Tinder Hero if they place an order before{" "}
            <span className={s.gradient}>
              <b>{formattedNextday.slice(0, formattedNextday.indexOf(","))}</b>
            </span>
          </p>
        </div>
        <div className={s.recImg}>
          <img src={th_img} alt="" />
        </div>
      </div>
      <div className={s.linkWrapper}>
        <a href="https://www.thetinderhero.com">Get Your Discount</a>
      </div>
      <Reviews data={reviewsData} />
      <div className={s.linkWrapper}>
        <a href="https://www.thetinderhero.com">Get Your Discount</a>
      </div>
    </div>
  );
};

export default ResultsPage;
