import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement> | { stroke: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.083}
      d="M11.458 6.371a5.208 5.208 0 0 1 5.209 5.208m.686 5.89 4.522 4.527M19.792 11.58a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0Z"
    />
  </svg>
);
export default SvgComponent;
