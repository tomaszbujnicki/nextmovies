import * as React from 'react';
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
      <path d="M24 47c12.7 0 23-10.3 23-23S36.7 1 24 1 1 11.3 1 24s10.3 23 23 23zM29.7 18.3 18.3 29.7M18.3 18.3l11.3 11.3" />
    </g>
  </svg>
);
export default SvgComponent;
