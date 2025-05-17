import axios from "axios";
import { createContext, useCallback, useMemo, useReducer } from "react";

const BASE_URL = "http://localhost:5001/api";

const REDUCER_ACTION_TYPE = {
  LOADING: "LOADING",
  LOADING_BEST_USERS: "LOADING_BEST_USERS",
  LOADED_BEST_USERS: "LOADED_BEST_USERS",
  LOADING_BEST_MEME: "LOADING_BEST_MEME",
  LOADED_BEST_MEME: "LOADED_BEST_MEME",
  LOADING_WORST_MEME: "LOADING_WORST_MEME",
  LOADED_WORST_MEME: "LOADED_WORST_MEME",
};

const initialRankingState = {
  users: [],
  bestMeme: {},
  worstMeme: {},
  isLoadingBestUsers: false,
  isLoadingBestMeme: false,
  isLoadingWorstMeme: false,
  errorLoadingBestUsers: "",
  errorLoadingBestMeme: "",
  errorLoadingWorstMeme: "",
};

function rankingReducer(state, action) {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.LOADING: {
      return {
        ...state,
        isLoadingBestUsers: true,
        isLoadingBestMeme: true,
        isLoadingWorstMeme: true,
        errorLoadingBestUsers: "",
        errorLoadingBestMeme: "",
        errorLoadingWorstMeme: "",
      };
    }

    case REDUCER_ACTION_TYPE.LOADED_BEST_USERS: {
      return { ...state, isLoadingBestUsers: false, users: action.payload };
    }

    case REDUCER_ACTION_TYPE.LOADED_BEST_MEME: {
      return { ...state, isLoadingBestMeme: false, bestMeme: action.payload };
    }

    case REDUCER_ACTION_TYPE.LOADED_WORST_MEME: {
      return { ...state, isLoadingWorstMeme: false, worstMeme: action.payload };
    }

    default:
      throw new Error("Nieznany typ akcji");
  }
}

function useRankingContext() {
  const [
    {
      users,
      bestMeme,
      worstMeme,
      isLoadingBestUsers,
      isLoadingBestMeme,
      isLoadingWorstMeme,
      errorLoadingBestUsers,
      errorLoadingBestMeme,
      errorLoadingWorstMeme,
    },
    dispatch,
  ] = useReducer(rankingReducer, initialRankingState);

  const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPE, []);

  const loadBestUsers = useCallback(async () => {
    dispatch({ type: REDUCER_ACTIONS.LOADING });
    try {
      const res = await axios.get(`${BASE_URL}/ranking/`);
      const { data } = res;
      console.log(data);

      dispatch({ type: REDUCER_ACTIONS.LOADED_BEST_USERS, payload: data });
    } catch (err) {
      console.log(err.message);
    }
  }, [REDUCER_ACTIONS]);

  const loadBestMeme = useCallback(async () => {
    dispatch({ type: REDUCER_ACTIONS.LOADING });
    try {
      const res = await axios.get(`${BASE_URL}/ranking/best`);
      const { data } = res;

      console.log(data);
      dispatch({ type: REDUCER_ACTIONS.LOADED_BEST_MEME, payload: data });
    } catch (err) {
      console.log(err.message);
    }
  }, [REDUCER_ACTIONS]);

  const loadWorstMeme = useCallback(async () => {
    dispatch({ type: REDUCER_ACTIONS.LOADING });
    try {
      const res = await axios.get(`${BASE_URL}/ranking/worst`);
      const { data } = res;

      console.log(data);
      dispatch({ type: REDUCER_ACTIONS.LOADED_WORST_MEME, payload: data });
    } catch (err) {
      console.log(err.message);
    }
  }, [REDUCER_ACTIONS]);

  return {
    loadBestUsers,
    users,
    loadBestMeme,
    bestMeme,
    loadWorstMeme,
    worstMeme,
  };
}

const initRankingContextState = {
  users: [],
  bestMeme: {},
  worstMeme: {},
  loadBestUsers: async () => {},
  loadBestMeme: async () => {},
  loadWorstMeme: async () => {},
};

export const RankingContext = createContext(initRankingContextState);

function RankingProvider({ children }) {
  return (
    <RankingContext.Provider value={useRankingContext()}>
      {children}
    </RankingContext.Provider>
  );
}

export default RankingProvider;
