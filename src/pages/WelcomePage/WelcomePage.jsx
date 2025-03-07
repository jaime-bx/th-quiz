import React from "react";
import s from "./WelcomePage.module.css";
import Button from "../../components/Button";
import img from "../../assets/doktoro.jpg"
import Wrapper from "../../components/Wrapper";


const WelcomePage = () => {
  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  const formattedNextday = nextDay.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Wrapper>
      <div className={s.titles}>
        <h2 className={s.title}>ANSWER 3 QUESTIONS</h2>
        <h3 className={s.subtitle}>
          To find out how much bigger you can grow your penis by using Tinder
          Hero
        </h3>
      </div>
      <div className={s.buttonWrapper}>
        <Button route="/q1" text="GO" />
      </div>
      <div className={s.content}>
        <div className={s.img}>
          <img src={img} alt="img" />
        </div>
        <div className={s.text}>
          <p className={s.contentTitle}>A unique offer only until {formattedNextday.slice(0, formattedNextday.indexOf(","))}</p>
          <p className={s.contentSubtitle}>
            Get a large discount for Tinder Hero after taking a test. <br /> Your
            test results will help Dr. Thomas Weaver conclude his study to
            improve penis enlargement techniques. <br /> The test results are completely
            anonymous!
          </p>
        </div>
      </div>
      <div className={s.footer}>
          <div className={s.footerText}>There are only <span className={s.highlightedFooterText}>17 bottles left</span>, do not delay!</div>
          <i>(Last update : 2min ago)</i>
        </div>
    </Wrapper>
  );
};

export default WelcomePage;
