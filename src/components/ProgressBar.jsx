import React from "react";
import s from "./ProgressBar.module.css";

const ProgressBar = ({width}) => {
  return (
    <div className={s.progress}>
      <div className={s.empty}></div>
      <div className={s.full} style={{width: width}}></div>
    </div>
  );
};

export default ProgressBar;
