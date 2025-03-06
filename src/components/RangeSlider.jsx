import React from "react";
import Slider from "@mui/material/Slider";
import s from "./RangeSlider.module.css";

const RangeSlider = ({handleChange, tip, min, max, step, defaultValue }) => {
  return (
    <>
      <div className={s.range}>
        <Slider
          defaultValue={defaultValue}
          aria-label="Small"
          valueLabelDisplay="on"
          min={min}
          max={max}
          step={step}
          sx={{
            width: window.innerWidth > 600 ? 510 : 350,
            color: "success.main",
            "& .MuiSlider-thumb": {
              borderRadius: "1px",
              width: "30px",
              height: "30px",
            },
          }}
          onChange={handleChange}
        />
      </div>
      <div className={s.tip}>
        <i>{tip}</i>
      </div>
    </>
  );
};

export default RangeSlider;
