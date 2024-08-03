import * as React from 'react';
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 501.28 476.74"
    {...props}
  >
    <path
      fill="var(--accent)"
      d="M166.02 147.06 0 182.1l113.72 125.92-17.98 168.72 154.9-69.24V0l-84.62 147.06z"
    />
    <path
      fill="transparent"
      stroke="var(--accent)"
      strokeWidth={20}
      d="m387.56 308.02 17.98 168.72-154.9-69.24-154.9 69.24 17.98-168.72L0 182.1l166.02-35.04L250.64 0l84.62 147.06 166.02 35.04-113.72 125.92z"
    />
  </svg>
);
export default SvgComponent;
