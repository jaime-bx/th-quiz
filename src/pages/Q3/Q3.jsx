import React, {useState, useEffect} from "react";
import s from "./Q3.module.css";

import Wrapper from "../../components/Wrapper";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import Hint from "../../components/Hint";
import CircularProgress from "../../components/CircularProgress";

const Q3 = () => {
  const [ready, setReady] = useState(false);
  return (
    <Wrapper>
      <div className={s.header}>
        <ProgressBar width="100%" />
        <div className={s.headerContent}>
          <div></div>
          <div className={s.counter}>3/3</div>
        </div>
      </div>
      <div className={s.body}>
        <p className={s.title}>Final Question</p>
        <p className={s.subtitle}>
          Are you ready to see the test results and take advantage of the
          opportunity to enlarge your penis? But you must understand that your
          sex life will forever change for the better!
        </p>
        {ready ? <Button route="/results" text="YES! SEE RESULTS!" /> : <Button route="/results" text="GENERATING..." disabled={true} />}
        
        <CircularProgress setReady={setReady} />
      </div>
      <div className={s.footer}>
        <Hint
          title="Did you know?"
          text="Tinder Hero will give you Bigger & Long-Lasting Erections that will maximize pleasure and intensify orgasms for your partner."
        />
      </div>
    </Wrapper>
  );
};

export default Q3;
