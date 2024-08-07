import React from 'react';

const CustomSvg = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="{className}"
  >
    <style type="text/css">
      {`
      .st0 {
        fill: none;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      }
      .st1 {
        fill: none;
        stroke-width: 3;
      }
      .st2 {
        fill: none;
        stroke-width: 3;
        stroke-miterlimit: 10;
      }
    `}
    </style>
    <path
      className="st0"
      d="M23,31H9c-4.4,0-8-3.6-8-8V9c0-4.4,3.6-8,8-8h14c4.4,0,8,3.6,8,8v14C31,27.4,27.4,31,23,31z"
    />
    <circle className="st0" cx="16" cy="16" r="7" />
    <circle className="st0" cx="24" cy="7" r="1" />
  </svg>
);
export default CustomSvg;
