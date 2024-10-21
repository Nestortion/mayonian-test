import { Dispatch, useState } from "react";
import Search2 from "../Components/SVGComponents/Search2SVG";
import Filter from "./Filter";

type Props = {
  setSearchValue: Dispatch<React.SetStateAction<string>>;
  setGameProvider: Dispatch<React.SetStateAction<string>>;
  searchValue: string;
};
const Search = ({ searchValue, setSearchValue, setGameProvider }: Props) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  return (
    <div className="flex flex-col">
      <div className="flex gap-1 px-1 mb-2">
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="🔍"
          type="text"
          value={searchValue}
          className="relative flex-1 border-2 border-[#00a6ff] rounded-md"
        />
        <div className="p-2 rounded-md border-2 border-[#888]">
          <Search2 onClick={() => setShowFilter((prev) => !prev)} />
        </div>
      </div>
      {showFilter && <Filter setGameProvider={setGameProvider} />}
    </div>
  );
};

export default Search;
