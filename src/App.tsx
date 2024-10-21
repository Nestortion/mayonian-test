import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import GameCard from "./Components/GameCard";
import { useEffect, useState } from "react";
import Search from "./Components/Search";
import { games } from "./store";

type Game = {
  id: number;
  name: string;
  imgPath: string;
  favorite: boolean;
  category: string;
  gameProvider: string;
};

const App = () => {
  const [gameList, setGameList] = useState<Array<Game> | null>(null);
  const [category, setCategory] = useState<string>("");
  const [gameProvider, setGameProvider] = useState<string>("");
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(games);
        }, 3000);
      });
    };
    fetchData()
      .then((res) => setGameList(res as Array<Game>))
      .catch(() => console.log("error"));
  }, []);

  useEffect(() => {
    if (!gameList) return;
    setGameList(games.filter((game) => game.category === category));
  }, [category]);

  useEffect(() => {
    if (!gameList) return;
    setGameList(games.filter((game) => game.gameProvider === gameProvider));
  }, [gameProvider]);

  useEffect(() => {
    if (!gameList) return;
    if (!searchValue) {
      setGameList(games);
    }
    setGameList(
      games.filter((game) =>
        game.name.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  }, [searchValue]);

  useEffect(() => {
    if (!gameList) return;
    setGameList(games.filter((game) => game.favorite === true));
  }, [showFavorites]);

  return (
    <main className="px-2 flex items-center flex-col h-screen">
      <div>
        <Header />
        <Navigation
          setShowFavorite={setShowFavorites}
          setCategory={setCategory}
          toggleSearch={setShowSearch}
        />
        {showSearch && (
          <Search
            setGameProvider={setGameProvider}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        )}
      </div>
      <div className="h-full overflow-y grid grid-cols-3 gap-3 rounded-sm">
        {gameList ? (
          gameList.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <div>Loading</div>
        )}
      </div>
      <Footer
        setShowSearch={setShowSearch}
        setShowFavorites={setShowFavorites}
      />
    </main>
  );
};

export default App;
