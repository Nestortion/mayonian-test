import Search2 from "../Components/SVGComponents/Search2SVG";
import PragmaticPlay from "../assets/pragmatic-play.png";
import EveryMatrix from "../assets/every-matrix.png";
import Evolution from "../assets/evolution.png";
import Expanse from "../assets/expanse.png";
import Close from "../assets/close.png";
import { Dispatch } from "react";

type Props = {
  setGameProvider: Dispatch<React.SetStateAction<string>>;
};

const Filter = ({ setGameProvider }: Props) => {
  return (
    <div className="flex flex-col gap-2 my-4">
      <div className="flex items-center text-white bg-[#00A6FF] rounded-t-md justify-between p-2">
        <div className="flex items-center gap-2">
          <div>
            <Search2 stroke="#FFF" />
          </div>
          <p>Game Provider</p>
          <div className="rounded-[40%] px-4 border-2">123</div>
        </div>
        <div>
          <img src={Close} />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center gap-2">
        <div
          onClick={() => setGameProvider("pragmatic-play")}
          className="flex px-4 py-2 bg-zinc-200 rounded-md items-center justify-center"
        >
          <img src={PragmaticPlay} />
        </div>
        <div
          onClick={() => setGameProvider("every-matrix")}
          className="flex px-4 py-2 bg-zinc-200 rounded-md items-center justify-center"
        >
          <img src={EveryMatrix} />
        </div>
        <div
          onClick={() => setGameProvider("evolution")}
          className="flex px-4 py-2 bg-zinc-200 rounded-md items-center justify-center"
        >
          <img src={Evolution} />
        </div>
        <div
          onClick={() => setGameProvider("expanse")}
          className="flex px-4 py-2 bg-zinc-200 rounded-md items-center justify-center"
        >
          <img src={Expanse} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
