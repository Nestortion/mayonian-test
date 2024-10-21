import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement> | { stroke: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill={props.stroke}
      d="M9.603 1.438a1 1 0 0 1 1.794 0l2.397 4.858a1 1 0 0 0 .753.547l5.36.779a1 1 0 0 1 .555 1.705l-3.88 3.781a1 1 0 0 0-.287.885l.916 5.34a1 1 0 0 1-1.451 1.053l-4.795-2.52a1 1 0 0 0-.93 0l-4.795 2.52a1 1 0 0 1-1.45-1.054l.915-5.339a1 1 0 0 0-.288-.885L.538 9.328a1 1 0 0 1 .554-1.706l5.361-.78a1 1 0 0 0 .753-.546l2.397-4.858Z"
    />
  </svg>
);
export default SvgComponent;
