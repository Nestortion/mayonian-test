import SearchSVG from "./SVGComponents/SearchSVG.tsx";
import StartSVG from "./SVGComponents/StartSVG.tsx";
import NewSVG from "./SVGComponents/NewSVG.tsx";
import SlotsSVG from "./SVGComponents/SlotsSVG.tsx";
import CasinoSVG from "./SVGComponents/CasinoSVG.tsx";
import JackpotsSVG from "./SVGComponents/JackpotsSVG.tsx";
import NavItem from "./NavItem.tsx";
import { Dispatch } from "react";

type Props = {
  setCategory: Dispatch<React.SetStateAction<string>>;
  toggleSearch: Dispatch<React.SetStateAction<boolean>>;
  setShowFavorite: Dispatch<React.SetStateAction<boolean>>;
};

const Navigation = ({ setShowFavorite, toggleSearch, setCategory }: Props) => {
  return (
    <div className="flex gap-4 py-4">
      <NavItem
        onClick={() => {
          toggleSearch(true);
          setShowFavorite(false);
        }}
        Icon={SearchSVG}
        title="SEARCH"
      />
      <NavItem
        onClick={() => {
          setCategory("start");
          toggleSearch(false);
          setShowFavorite(false);
        }}
        Icon={StartSVG}
        title="START"
      />
      <NavItem
        onClick={() => {
          setCategory("new");
          toggleSearch(false);
          setShowFavorite(false);
        }}
        Icon={NewSVG}
        title="NEW"
      />
      <NavItem
        onClick={() => {
          setCategory("slots");
          toggleSearch(false);
          setShowFavorite(false);
        }}
        Icon={SlotsSVG}
        title="SLOTS"
      />
      <NavItem
        onClick={() => {
          setCategory("live");
          toggleSearch(false);
          setShowFavorite(false);
        }}
        Icon={CasinoSVG}
        title="LIVE"
      />
      <NavItem
        onClick={() => {
          setCategory("jackpots");
          toggleSearch(false);
          setShowFavorite(false);
        }}
        Icon={JackpotsSVG}
        title="JACKPOTS"
      />
    </div>
  );
};

export default Navigation;
