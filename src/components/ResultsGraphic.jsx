import React from "react";

const ResultsGraphic = ({ startValue, endValue }) => {
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
      <path className="st8" d="M474.3,22.1c-8.5,0-15.4,6.9-15.4,15.4c0,8.5,6.9,15.4,15.4,15.4s15.4-6.9,15.4-15.4
                                        	C489.7,29,482.8,22.1,474.3,22.1z M474.3,24.1c7.4,0,13.4,6,13.4,13.4c0,7.4-6,13.4-13.4,13.4s-13.4-6-13.4-13.4
                                        	C460.9,30.1,466.9,24.1,474.3,24.1z M469.2,31.8c-1.3,0-2.4,1.1-2.4,2.4c0,1.3,1.1,2.4,2.4,2.4c0,0,0,0,0,0c1.3,0,2.4-1.1,2.4-2.4
                                        	C471.6,32.9,470.6,31.8,469.2,31.8z M479.3,31.8c-1.3,0-2.4,1.1-2.4,2.4c0,1.3,1.1,2.4,2.4,2.4c0,0,0,0,0,0c1.3,0,2.4-1.1,2.4-2.4
                                        	c0,0,0,0,0,0C481.7,32.9,480.6,31.8,479.3,31.8z M468.5,40.9c-0.6,0-1.1,0.5-1.1,1.1c0,0.3,0.1,0.5,0.3,0.7c1.6,1.9,4,3,6.6,3
                                        	c0,0,0,0,0,0c2.5,0,5-1.1,6.6-3c0.4-0.5,0.3-1.2-0.2-1.6c-0.5-0.4-1.1-0.3-1.5,0.1c-1.2,1.4-3,2.2-4.9,2.2c-1.9,0-3.7-0.8-4.9-2.2
                                        	C469.2,41.1,468.9,40.9,468.5,40.9L468.5,40.9z"></path>
      <text
        transform="matrix(0.9734 -0.2293 0.2293 0.9734 262.2826 131.3787)"
        className="st3 st5"
      >
        <tspan className="final-days">11</tspan> Days
      </text>
      <path
        className="st8"
        d="M41.1,220.4h10.6c0.7,0,1.2,0.6,1.2,1.2s-0.6,1.2-1.2,1.2H41.1c-0.7,0-1.2-0.6-1.2-1.2
                                        	C39.9,221,40.4,220.4,41.1,220.4z M46.4,201.2c-8.5,0-15.4,6.9-15.4,15.4S37.9,232,46.4,232s15.4-6.9,15.4-15.4
                                        	S54.9,201.2,46.4,201.2z M46.4,203.2c7.4,0,13.4,6,13.4,13.4s-6,13.4-13.4,13.4C39,230,33,224,33,216.6
                                        	C33,209.2,39,203.2,46.4,203.2z M41.3,210.9c-1.3,0-2.4,1.1-2.4,2.4c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4
                                        	C43.8,211.9,42.7,210.9,41.3,210.9z M51.4,210.9c-1.3,0-2.4,1.1-2.4,2.4c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4
                                        	C53.8,211.9,52.8,210.8,51.4,210.9z"
      ></path>
    </svg>
  );
};

export default ResultsGraphic;
