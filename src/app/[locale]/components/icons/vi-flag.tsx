import * as React from 'react';

function ViFlag(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_71_1887)">
      <path
        d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z"
        fill="#D80027" />
      <path
        d="M8.00002 4.67383L8.8634 7.33098H11.6573L9.39696 8.97317L10.2603 11.6304L8.00002 9.98814L5.73971 11.6304L6.60309 8.97317L4.34277 7.33098H7.13665L8.00002 4.67383Z"
        fill="#FFDA44" />
    </g>
    <defs>
      <clipPath id="clip0_71_1887">
        <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>);
}

export default ViFlag;
