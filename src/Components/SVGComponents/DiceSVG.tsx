import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement> | { stroke: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill={props.stroke}
      fillRule="evenodd"
      d="m23.366 7.33-1.323-3.72a4.403 4.403 0 0 0-3.57-2.89L14.56.198a4.444 4.444 0 0 0-4.04 1.612L7.673 5.326a4.446 4.446 0 0 0-.738 4.287l1.323 3.72a4.403 4.403 0 0 0 3.57 2.89l3.914.52a4.444 4.444 0 0 0 4.04-1.611l2.846-3.515a4.447 4.447 0 0 0 .738-4.287Zm-10.582 6.613c.593-.079 1.096.159 1.124.53.029.372-.428.738-1.02.817-.592.08-1.095-.158-1.123-.53-.029-.372.428-.738 1.02-.817ZM10.7 5.738c.703-.094 1.335.68 1.412 1.73.076 1.05-.432 1.976-1.134 2.069-.703.093-1.336-.681-1.412-1.73-.077-1.05.431-1.976 1.134-2.07Zm5.92 6.76c.593-.08 1.096.158 1.124.53.03.371-.427.737-1.02.816-.591.08-1.095-.159-1.123-.53-.029-.372.428-.738 1.02-.817Zm3.5-1.286c.592-.08 1.095.158 1.123.53.03.372-.427.738-1.02.817-.591.079-1.095-.16-1.123-.53-.029-.373.428-.738 1.02-.817ZM19.49 5.72c.332-.41 1.097-.341 1.708.155.611.494.838 1.228.506 1.638-.331.41-1.096.34-1.708-.155-.61-.495-.838-1.228-.506-1.638Zm-4.715-3.819c.332-.41 1.097-.34 1.708.155s.838 1.228.506 1.638c-.331.41-1.096.341-1.707-.154-.612-.495-.839-1.229-.507-1.639ZM9.41 1.04 6.276.606a3.617 3.617 0 0 0-3.408 1.447L1.002 4.61c-.73 1-.884 2.298-.406 3.424l1.393 3.283a3.49 3.49 0 0 0 2.745 2.086l2.404.332-1.251-3.46a5.75 5.75 0 0 1 .93-5.577L9.73 1.099a3.685 3.685 0 0 0-.32-.06Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;