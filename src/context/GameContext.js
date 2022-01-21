import { createContext, useState } from 'react';
import { fetchGames } from '../services/games';

export const GameContext = createContext();

const DEFAULT_STATE = {
  games: [],
  gamesLoading: false,
  gamesError: null,
};

const GamesProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_STATE);

  const getGames = async (params) => {
    try {
      setState((state) => ({ ...state, gamesLoading: true, gamesError: null }));
      const { data } = await fetchGames(params);
      setState((state) => ({ ...state, gamesLoading: false, games: data }));
    } catch (error) {
      setState((state) => ({
        ...state,
        gamesLoading: false,
        gamesError: error.message,
      }));
    }
  };

  return (
    <GameContext.Provider
      value={{
        ...state,
        getGames,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GamesProvider;
