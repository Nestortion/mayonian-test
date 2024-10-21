import BurgerMenu from "../assets/burger_menu.png";
import Logo from "../assets/F1M5_Logo.png";
import Wallet from "../assets/wallet.png";
import Separator from "../assets/separator.png";
import Profile from "../assets/profile.png";
import Carousel from "./Carousel";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center py-2">
        <div className="flex gap-2">
          <div>
            <img className="object-fill" src={BurgerMenu} />
          </div>
          <div>
            <img className="object-fill" src={Logo} />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <img className="object-fill" src={Wallet} />
          </div>
          <div className="font-semibold text-[#00A6FF] flex items-center">
            $1990.6
          </div>
          <div>
            <img className="object-fill" src={Separator} />
          </div>
          <div className="flex items-center">
            <img className="object-fill" src={Profile} />
          </div>
        </div>
      </div>
      <Carousel />
    </>
  );
};

export default Header;
