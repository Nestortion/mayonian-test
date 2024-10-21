import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement> | { stroke: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={15}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <g clipPath="url(#c)">
          <path
            fill="#fff"
            d="m11.821 13.247-.666-3.814 2.832-2.69-3.906-.562-1.75-3.46-1.749 3.46-3.906.562 2.832 2.69-.675 3.814 3.498-1.803 3.49 1.803Zm3.693-7.464c.346.054.518.193.518.417 0 .132-.08.277-.24.434l-3.36 3.207.796 4.529c.006.042.01.103.01.181 0 .302-.127.453-.38.453a.762.762 0 0 1-.37-.109L8.33 12.758l-4.155 2.137a.8.8 0 0 1-.37.109c-.13 0-.227-.044-.292-.131a.525.525 0 0 1-.097-.322c0-.036.006-.097.018-.181l.796-4.53L.862 6.635C.708 6.471.631 6.326.631 6.2c0-.224.172-.363.518-.417l4.646-.661L7.878 1C7.995.753 8.146.63 8.33.63c.186 0 .337.124.454.371l2.083 4.122 4.646.66Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.63.625h15.403V15H.63z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M.63.625h15.403V15H.63z" />
      </clipPath>
      <clipPath id="c">
        <path fill="#fff" d="M.63.625h15.403V15H.63z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
