import Sports from "./SVGComponents/SportsSVG.tsx";
import Favorites from "./SVGComponents/StarFilledSVG.tsx";
import Invite from "./SVGComponents/InviteSVG.tsx";
import Dice from "./SVGComponents/DiceSVG.tsx";
import Wallet from "./SVGComponents/WalletSVG.tsx";
import { Dispatch } from "react";
import NavItem from "./NavItem";

type Props = {
  setShowFavorites: Dispatch<React.SetStateAction<boolean>>;
  setShowSearch: Dispatch<React.SetStateAction<boolean>>;
};
const Footer = ({ setShowSearch, setShowFavorites }: Props) => {
  return (
    <div className=" flex gap-4 py-2">
      <NavItem
        onClick={() => {
          setShowFavorites(false);
          setShowSearch(false);
        }}
        Icon={Sports}
        title="SPORTS"
      />
      <NavItem
        onClick={() => {
          setShowFavorites(true);
          setShowSearch(false);
        }}
        Icon={Favorites}
        title="FAVORITES"
      />
      <NavItem
        Icon={Invite}
        title="INVITE"
        onClick={() => {
          setShowFavorites(false);
          setShowSearch(false);
        }}
      />
      <NavItem
        onClick={() => {
          setShowFavorites(false);
          setShowSearch(false);
        }}
        Icon={Dice}
        title="CASINO LIVE"
      />
      <NavItem
        onClick={() => {
          setShowFavorites(false);
          setShowSearch(false);
        }}
        Icon={Wallet}
        title="CASHIER"
      />
    </div>
  );
};

export default Footer;
