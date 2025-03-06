import React from "react";

const ResultsGraphic = ({startValue, endValue}) => {
  return (
      <svg
        version="1.1"
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 515 272"
      >
        <style>
          {`
          .st0 { stroke: #CCCCCC; stroke-width: 2; stroke-linecap: round; stroke-dasharray: 0 3; }
          .st1 { fill: none; }
          .st2 { fill: #d93a00; }
          .st2_2 { fill: #4eb52b; }
          .st2_3 { fill: #29780f; }
          .st3 { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif; text-anchor: middle; font-weight: 700; }
          .st4 { font-size: 14px; }
          .st5 { font-size: 12px; }
          .st6 { fill: url(#SVGID_1_); }
          .st7 { fill: none; stroke: #4eb52b; stroke-width: 3; stroke-linecap: round; stroke-dasharray: 4,8; }
          .st8 { fill: #FFFFFF; }
        `}
        </style>
        <path className="st0" d="M46.4,1.3v215.3 M474.3,33.7V1.3" />
        <g transform="matrix(.704 0 0 .704 254.421 -501.894)">
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="-134.7181"
            y1="1047.0305"
            x2="-134.7177"
            y2="1048.1711"
            gradientTransform="matrix(-132.6801 0 0 -238.9335 -17868.916 251273.5156)"
          >
            <stop
              offset="0"
              style={{ stopColor: "#4eb52b", stopOpacity: 0.04 }}
            />
            <stop
              offset="0.2147"
              style={{ stopColor: "#4eb52b", stopOpacity: 0.1 }}
            />
            <stop
              offset="0.5351"
              style={{ stopColor: "#4eb52b", stopOpacity: 0.35 }}
            />
            <stop
              offset="0.7724"
              style={{ stopColor: "#4eb52b", stopOpacity: 0.5 }}
            />
          </linearGradient>
          <path
            className="st6"
            d="M22.7,907.3c120.9-22.8,205.6-103.8,284.8-139.6c22-9.9,43.6-6.7,65.4-7.5l1.3,339.4h-737.1l1.2-72.1 c20.3-0.1,39.3,0.1,57.5-3C-188.9,1004.7-110.5,932.4,22.7,907.3z"
          />
          <path
            className="st7"
            d="M-360,1027.2c20.5-0.1,39.7,0,57.9-3.2c114.6-20,192.6-92,325-117.1C143.5,884.1,228,802.8,307,767.1 c21.7-9.8,43-6.6,64.6-7.4"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="24;12"
              dur="0.48s"
              repeatCount="indefinite"
            />
          </path>
          <circle className="st2" cx="-295.5" cy="1020.6" r="23.4" />
          <circle className="st2 st2_2" cx="312.3" cy="766.2" r="23.4" />
        </g>
        <rect x="12.7" y="239.3" className="st1" width="67.3" height="31.3" />
        <text
          transform="matrix(1 0 0 1 45.9178 249.1978)"
          className="st2 st3 st4"
        >
          <tspan className="start-size">{startValue}</tspan> inches
        </text>
        <rect x="440.6" y="62.9" className="st1" width="67.3" height="31.3" />
        <text
          transform="matrix(1 0 0 1 473.8103 72.8708)"
          className="st3 st4 st2_3"
        >
          <tspan className="final-size">{endValue}</tspan> inches
        </text>
        <text
          transform="matrix(0.9734 -0.2293 0.2293 0.9734 262.2826 131.3787)"
          className="st3 st5"
        >
          <tspan className="final-days">11</tspan> Days
        </text>
      </svg>
  );
};

export default ResultsGraphic;
