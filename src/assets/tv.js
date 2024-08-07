import * as React from 'react';
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <title>{'ionicons-v5-f'}</title>
    <rect
      width={448}
      height={272}
      x={32}
      y={96}
      rx={32.14}
      ry={32.14}
      style={{
        fill: 'none',
        strokeLinejoin: 'round',
        strokeWidth: 32,
      }}
    />
    <path
      d="M128 416h256"
      style={{
        fill: 'none',
        strokeLinecap: 'round',
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
  </svg>
);
export default SvgComponent;
