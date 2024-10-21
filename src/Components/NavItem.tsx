import { ComponentProps, useState } from "react";

type Props = {
  title: string;
  Icon: JSX.ElementType;
} & ComponentProps<"div">;

const NavItem = (props: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className="flex hover:text-[#00A6FF] flex-col items-center"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      {...props}
    >
      <props.Icon stroke={hover ? "#00A6FF" : "#888888"} />
      {props.title}
    </div>
  );
};

export default NavItem;
