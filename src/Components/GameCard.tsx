import Star2 from "../assets/star2.png";
import Star1 from "../assets/star1.png";
import { games } from "../store";
import { useState } from "react";

type Game = {
  id: number;
  name: string;
  imgPath: string;
  favorite: boolean;
  category: string;
  gameProvider: string;
};
type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  const [_, setFavorite] = useState<boolean>(game.favorite);
  return (
    <div
      className="relative 
      w-fit
      before:content-['']
      before:absolute 
      before:top-0
      before:right-0
      before:border-transparent
      before:border-[20px]
      before:border-t-black
      before:border-r-black
      before:rounded-t-lg
      before:rounded-r-lg
      before:border-opacity-50
      "
    >
      <div
        onClick={() => {
          setFavorite((prev) => !prev);
          games.forEach((g) => {
            if (g.id === game.id) {
              g.favorite = !game.favorite;
            }
            return g;
          });
        }}
        className="absolute z-1 top-1 right-1 hover:cursor-pointer"
      >
        <img src={game.favorite ? Star2 : Star1} alt="" />
      </div>
      <img src={game.imgPath} />
    </div>
  );
};

export default GameCard;
