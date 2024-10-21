import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement> | { stroke: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <g fill={props.stroke} clipPath="url(#a)">
      <path d="M22.748 8.348a1.122 1.122 0 0 0 1.125-1.126 1.126 1.126 0 1 0-1.125 1.126ZM6.388 20.144a1.054 1.054 0 1 0 0 2.109 1.054 1.054 0 0 0 0-2.109ZM22.245 8.958v9.083h1.006V8.958a1.112 1.112 0 0 1-.503.124c-.182 0-.351-.048-.503-.124ZM15.101 20.144a1.054 1.054 0 1 0 0 2.109 1.054 1.054 0 0 0 0-2.109Z" />
      <path d="M20.229 1.311H1.089a.589.589 0 0 0-.59.589v22.026a1 1 0 0 0 1 1h18.319a1 1 0 0 0 1-1V1.9a.589.589 0 0 0-.59-.589Zm-5.973 1.436a.886.886 0 1 1 0 1.772.886.886 0 0 1 0-1.772Zm-3.512-.699a1.585 1.585 0 1 1 0 3.17 1.585 1.585 0 0 1 0-3.17Zm-3.51.699a.886.886 0 1 1 0 1.772.886.886 0 0 1 0-1.772Zm-.846 20.118a1.665 1.665 0 1 1 0-3.33 1.665 1.665 0 0 1 0 3.33Zm4.356 0a1.665 1.665 0 1 1 0-3.33 1.665 1.665 0 0 1 0 3.33Zm4.357 0a1.665 1.665 0 1 1 0-3.33 1.665 1.665 0 0 1 0 3.33Zm4.432-5.585H2.956a1 1 0 0 1-1-1V7.025a1 1 0 0 1 1-1h15.577a1 1 0 0 1 1 1V17.28Z" />
      <path d="M10.744 20.144a1.054 1.054 0 1 0 0 2.109 1.054 1.054 0 0 0 0-2.109ZM23.159 18.64h-1.69v4.683h1.69a2.341 2.341 0 1 0 0-4.683Z" />
      <path
        fillRule="evenodd"
        d="M8.666 7.042a.335.335 0 0 0-.335.334v8.535c0 .184.15.334.335.334h3.882c.185 0 .335-.15.335-.335V7.377a.335.335 0 0 0-.335-.334H8.666Zm.677 4.895a.42.42 0 0 1 .22-.325.339.339 0 0 1-.16-.325l.073-.789a.425.425 0 0 1 .417-.375h1.704a.339.339 0 0 1 .347.376l-.073.788a.42.42 0 0 1-.22.325.337.337 0 0 1 .16.325l-.073.789a.425.425 0 0 1-.416.375H9.617c-.015 0-.03 0-.045-.002a.339.339 0 0 1-.302-.373l.073-.79Zm.869-.084a.18.18 0 0 0-.181.15l-.03.315a.06.06 0 0 0 0 .012v.006a.144.144 0 0 0 .154.132h.748a.179.179 0 0 0 .18-.15l.03-.315V11.985a.143.143 0 0 0-.153-.132h-.748Zm.103-1.114a.18.18 0 0 0-.18.15l-.03.315V11.222c.005.08.075.138.153.132h.748a.179.179 0 0 0 .181-.15l.03-.315a.06.06 0 0 0 0-.012v-.006a.143.143 0 0 0-.154-.132h-.748Zm.088 3.55a.3.3 0 0 1 .393 0l.928.804a.3.3 0 0 1-.197.527H9.672a.3.3 0 0 1-.196-.527l.927-.803Zm.393-5.34a.3.3 0 0 1-.393 0l-.927-.802a.3.3 0 0 1 .196-.527h1.855a.3.3 0 0 1 .197.527l-.928.803ZM14.288 7.042a.335.335 0 0 0-.335.334v8.535c0 .184.15.334.335.334h3.882c.185 0 .335-.15.335-.335V7.377a.335.335 0 0 0-.335-.334h-3.882Zm.678 4.895a.42.42 0 0 1 .22-.325.339.339 0 0 1-.16-.325l.072-.789a.425.425 0 0 1 .417-.375h1.704a.339.339 0 0 1 .346.376l-.072.788a.42.42 0 0 1-.22.325.337.337 0 0 1 .16.325l-.073.789a.425.425 0 0 1-.416.375h-1.705c-.015 0-.03 0-.045-.002a.339.339 0 0 1-.301-.373l.073-.79Zm.868-.084a.18.18 0 0 0-.18.15l-.03.315a.06.06 0 0 0 0 .012v.006a.144.144 0 0 0 .153.132h.748a.179.179 0 0 0 .181-.15l.03-.315V11.985a.143.143 0 0 0-.154-.132h-.748Zm.103-1.114a.18.18 0 0 0-.18.15l-.03.315V11.222c.006.08.075.138.153.132h.748a.179.179 0 0 0 .181-.15l.03-.315V10.871a.143.143 0 0 0-.154-.132h-.748Zm.167 3.55a.3.3 0 0 1 .392 0l.928.804a.3.3 0 0 1-.197.527h-1.854a.3.3 0 0 1-.197-.527l.928-.803Zm.392-5.34a.3.3 0 0 1-.392 0l-.928-.802a.3.3 0 0 1 .197-.527h1.854a.3.3 0 0 1 .197.527l-.928.803ZM3.01 7.042a.335.335 0 0 0-.335.334v8.535c0 .184.15.334.335.334h3.882c.185 0 .335-.15.335-.335V7.377a.335.335 0 0 0-.335-.334H3.01Zm2.186 7.248a.3.3 0 0 0-.393 0l-.927.803a.3.3 0 0 0 .196.527h1.855a.3.3 0 0 0 .197-.527l-.928-.803Zm-.393-5.34a.3.3 0 0 0 .393 0l.928-.803a.3.3 0 0 0-.197-.527H4.072a.3.3 0 0 0-.196.527l.927.803Zm1.517 1.836-1.562.007a.297.297 0 0 0-.229.27c-.022.206-.024.39-.024.39l1.724-.01-.04.628-1.71.009-.053 1.05-.88-.004.102-2.21s.057-.704.71-.754l.226-.001 1.806-.009-.07.634Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5.62h25v25H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
