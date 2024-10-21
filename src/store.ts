import SugarRush from "./assets/sugar-rush.png";
import BadWolf from "./assets/big-bad-wolf.png";
import ShaolinCrew from "./assets/shaolin-crew.png";
import PiratesPower from "./assets/pirates-power.png";
import BookEgypt from "./assets/book-of-egypt.png";
import Crocodile from "./assets/crocodile-butz-xtreme-fb.png";
import Anaconda from "./assets/anaconda-wild.png";
import MayaJackpot from "./assets/maya-jackpot.png";
import BeachLife from "./assets/beach-life.png";
import Inca from "./assets/inca-jackpot.png";
import PrideOfPersia from "./assets/pride-of-persia.png";
import Azteca from "./assets/azteca.png";

type Game = {
  id: number;
  name: string;
  imgPath: string;
  favorite: boolean;
  category: string;
  gameProvider: string;
};

export const games: Array<Game> = [
  {
    id: 1,
    name: "Sugar Rush",
    imgPath: SugarRush,
    favorite: true,
    category: "start",
    gameProvider: "every-matrix",
  },
  {
    id: 2,
    name: "Shaolin Crew",
    imgPath: ShaolinCrew,
    favorite: false,
    category: "new",
    gameProvider: "every-matrix",
  },
  {
    id: 3,
    name: "Big Bad Wolf",
    imgPath: BadWolf,
    favorite: true,
    category: "new",
    gameProvider: "every-matrix",
  },
  {
    id: 4,
    name: "Book Of Egypt",
    imgPath: BookEgypt,
    favorite: false,
    category: "slots",
    gameProvider: "pragmatic-play",
  },
  {
    id: 5,
    name: "Pirates Power",
    imgPath: PiratesPower,
    favorite: true,
    category: "jackpots",
    gameProvider: "pragmatic-play",
  },
  {
    id: 6,
    name: "Crocodile Blitz Xtreme FB",
    imgPath: Crocodile,
    favorite: false,
    category: "live",
    gameProvider: "pragmatic-play",
  },
  {
    id: 7,
    name: "Anaconda Wild 2 Power Play Jackpot",
    imgPath: Anaconda,
    favorite: true,
    category: "jackpots",
    gameProvider: "evolution",
  },
  {
    id: 8,
    name: "Maya Jackpot",
    imgPath: MayaJackpot,
    favorite: false,
    category: "jackpots",
    gameProvider: "evolution",
  },
  {
    id: 9,
    name: "Beach Life",
    imgPath: BeachLife,
    favorite: true,
    category: "live",
    gameProvider: "evolution",
  },
  {
    id: 10,
    name: "Inca Jackpot",
    imgPath: Inca,
    favorite: false,
    category: "jackpots",
    gameProvider: "expanse",
  },
  {
    id: 11,
    name: "Pride of Persia",
    imgPath: PrideOfPersia,
    favorite: true,
    category: "slots",
    gameProvider: "expanse",
  },
  {
    id: 12,
    name: "Azteca",
    imgPath: Azteca,
    favorite: false,
    category: "new",
    gameProvider: "expanse",
  },
];
