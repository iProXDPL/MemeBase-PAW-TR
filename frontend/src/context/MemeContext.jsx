import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5001/api";

const REDUCER_ACTION_TYPE = {
  LOADING: "LOADING",
  REJECTED: "REJECTED",
  CREATED: "CREATED",
  MEMES_LOADED: "MEMES_LOADED",
  FAKE_LOADED: "FAKE_LOADED",
};

const initialMemeState = {
  memes: [],
  isLoading: false,
  currentMeme: {},
  error: "",
};

function memeReducer(state, action) {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.LOADING: {
      return { ...state, isLoading: true, error: "" };
    }

    case REDUCER_ACTION_TYPE.CREATED: {
      return {
        ...state,
        isLoading: false,
        currentMeme: action.payload,
        memes: [...state.memes, action.payload],
      };
    }

    case REDUCER_ACTION_TYPE.MEMES_LOADED: {
      return { ...state, isLoading: false, memes: [...action.payload] };
    }

    case REDUCER_ACTION_TYPE.REJECTED: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case REDUCER_ACTION_TYPE.FAKE_LOADED: {
      return { ...state, isLoading: false };
    }

    default:
      throw new Error("Nieznany typ akcji");
  }
}

function useMemeContext() {
  const [{ memes, isLoading, currentMeme, error }, dispatch] = useReducer(
    memeReducer,
    initialMemeState,
  );

  useEffect(function () {
    async function fetchMemes() {
      console.log("pobieranie memów");
      dispatch({ type: REDUCER_ACTION_TYPE.LOADING });
      try {
        const res = await axios.get(`${BASE_URL}/posts/`);
        const { data } = res;

        dispatch({ type: REDUCER_ACTION_TYPE.MEMES_LOADED, payload: data });
      } catch (err) {
        dispatch({
          type: REDUCER_ACTION_TYPE.REJECTED,
          payload: `Wystąpił błąd podczas ładowania memów ${err.response.data.error}`,
        });
      }
    }

    fetchMemes();
  }, []);

  async function createMeme(newMeme) {
    dispatch({ type: REDUCER_ACTION_TYPE.LOADING });
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", newMeme.title);
    formData.append("file", newMeme.file);
    try {
      console.log(
        `Tworzenie mema, tytuł: ${formData.get("title")}, mem: ${formData.get("file").name}`,
      );

      // FIXME: Wait for backend endpoint
      const res = await axios.post(`${BASE_URL}/posts/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;
      console.log(data.message);
      console.log("Mem utworzony");
      dispatch({ type: REDUCER_ACTION_TYPE.FAKE_LOADED });
      // FIXME: Wait for backend endpoint
      // dispatch({ type: REDUCER_ACTION_TYPE.CREATED, payload: data });
    } catch (err) {
      dispatch({
        type: REDUCER_ACTION_TYPE.REJECTED,
        payload: `Wystąpił problem z publikowaniem mema: ${err.response.data.error}`,
      });
    }
  }

  return { memes, isLoading, currentMeme, createMeme, error };
}

const initMemeContextState = {
  memes: [],
  isLoading: false,
  error: "",
  createMeme: () => {},
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
};

export const MemeContext = createContext(initMemeContextState);

function MemeProvider({ children }) {
  return (
    <MemeContext.Provider value={useMemeContext()}>
      {children}
    </MemeContext.Provider>
  );
}

export default MemeProvider;
