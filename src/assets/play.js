import * as React from 'react';
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" {...props}>
    <circle cx={60} cy={60} r={55} stroke="var(--accent)" strokeWidth={5} />
    <path
      fill="var(--accent)"
      d="M79.7 64c3.8-2.2 3.8-5.8 0-8L53.6 40.9c-3.8-2.2-6.9-.4-6.9 4v30.2c0 4.4 3.1 6.2 6.9 4L79.7 64z"
    />
  </svg>
);
export default SvgComponent;
