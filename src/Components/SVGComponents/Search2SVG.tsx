import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill="#888"
          d="M16.51 16.015a3.76 3.76 0 1 1 .954-1.43l1.949 1.325a.86.86 0 1 1-.966 1.422l-1.937-1.317ZM2.64 2.871a.86.86 0 0 1 0-1.719h16.29a.86.86 0 0 1 0 1.72H2.64Zm0 9.736a.86.86 0 1 1 0-1.718h4.903a.86.86 0 1 1 0 1.718H2.641Zm0-4.863a.86.86 0 0 1 0-1.719h16.29a.86.86 0 0 1 0 1.72H2.64Zm0 9.746a.86.86 0 1 1 0-1.718h4.903a.86.86 0 1 1 0 1.718H2.641Zm11.3-2.177a2.041 2.041 0 1 0 0-4.083 2.041 2.041 0 0 0 0 4.082Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
