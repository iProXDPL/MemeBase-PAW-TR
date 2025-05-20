import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5001/api";

const REDUCER_ACTION_TYPE = {
  LOADING: "LOADING",
  REJECTED: "REJECTED",
  MEME_FETCH_REJECTED: "MEME_FETCH_REJECTED",
  CREATED: "CREATED",
  DELETED: "DELETED",
  MEMES_LOADED: "MEMES_LOADED",
  FAKE_LOADED: "FAKE_LOADED",
  UPDATED: "UPDATED",
  DELETE_MODAL_VISIBLE: "DELETE_MODAL_VISIBLE",
  DELETE_MODAL_CLOSED: "DELETE_MODAL_CLOSED",
  EDIT_MODAL_VISIBLE: "EDIT_MODAL_VISIBLE",
  EDIT_MODAL_CLOSED: "EDIT_MODAL_CLOSED",
};

const initialMemeState = {
  memes: [],
  isLoading: false,
  currentMeme: {},
  error: "",
  uploadError: "",
  isDeleteMemeModal: false,
};

function memeReducer(state, action) {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.LOADING: {
      return { ...state, isLoading: true, uploadError: "" };
    }

    case REDUCER_ACTION_TYPE.CREATED: {
      return {
        ...state,
        isLoading: false,
        currentMeme: action.payload,
        memes: [...state.memes, action.payload],
      };
    }

    case REDUCER_ACTION_TYPE.UPDATED: {
      return { ...state, isLoading: false };
    }

    case REDUCER_ACTION_TYPE.MEMES_LOADED: {
      return { ...state, isLoading: false, memes: [...action.payload] };
    }

    case REDUCER_ACTION_TYPE.REJECTED: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case REDUCER_ACTION_TYPE.MEME_FETCH_REJECTED: {
      return { ...state, isLoading: false, uploadError: action.payload };
    }

    case REDUCER_ACTION_TYPE.DELETED: {
      return { ...state, isLoading: false, isDeleteMemeModal: false };
    }

    case REDUCER_ACTION_TYPE.FAKE_LOADED: {
      return { ...state, isLoading: false };
    }

    case REDUCER_ACTION_TYPE.DELETE_MODAL_VISIBLE: {
      return { ...state, isDeleteMemeModal: true, currentMeme: action.payload };
    }

    case REDUCER_ACTION_TYPE.DELETE_MODAL_CLOSED: {
      return { ...state, isDeleteMemeModal: false };
    }

    case REDUCER_ACTION_TYPE.EDIT_MODAL_VISIBLE: {
      return { ...state, isEditMemeModal: true, currentMeme: action.payload };
    }

    case REDUCER_ACTION_TYPE.EDIT_MODAL_CLOSED: {
      return { ...state, isEditMemeModal: false };
    }

    default:
      throw new Error("Nieznany typ akcji");
  }
}

function useMemeContext() {
  const [
    { memes, isLoading, currentMeme, error, isDeleteMemeModal, isEditMemeModal },
    dispatch,
  ] = useReducer(memeReducer, initialMemeState);

  const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPE, []);

  const fetchMemes = useCallback(async () => {
    dispatch({ type: REDUCER_ACTIONS.LOADING });
    try {
      const res = await axios.get(`${BASE_URL}/posts/`);
      const { data } = res;
      console.log(data);
      dispatch({ type: REDUCER_ACTIONS.MEMES_LOADED, payload: data });
    } catch (err) {
      dispatch({
        type: REDUCER_ACTIONS.MEME_FETCH_REJECTED,
        payload: `Wystąpił błąd podczas ładowania memów ${err.response?.data?.error || err.message}`,
      });
    }
  }, [REDUCER_ACTIONS]);

  useEffect(() => {
    fetchMemes();
  }, [fetchMemes]);

  async function createMeme(newMeme) {
    dispatch({ type: REDUCER_ACTIONS.LOADING });
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("description", newMeme.title);
    formData.append("image", newMeme.file);
    try {
      const res = await axios.post(`${BASE_URL}/posts/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = res;
      console.log(data.message);
      console.log("Mem utworzony");
      dispatch({ type: REDUCER_ACTION_TYPE.CREATED, payload: data.data.post });
      await fetchMemes();
    } catch (err) {
      dispatch({
        type: REDUCER_ACTIONS.REJECTED,
        payload: `Wystąpił problem z publikowaniem mema: ${err}`,
      });
    }
  }

  async function deleteMeme(memeId) {
    dispatch({ type: REDUCER_ACTIONS.LOADING });
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(`${BASE_URL}/posts/${memeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = res;

      if (data.status !== "success")
        throw new Error("Nie udało się usunąć mema");

      await fetchMemes();

      dispatch({ type: REDUCER_ACTION_TYPE.DELETED });
    } catch (err) {
      console.log(err.message);
    }
  }

  async function likeMeme(memeId) {
    dispatch({ type: REDUCER_ACTIONS.LOADING });
    console.log("liking...");
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `${BASE_URL}/posts/like/${memeId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const { data } = res;

      if (data.status !== "success")
        throw new Error("Nie udało się polubić mema");

      await fetchMemes();
      dispatch({ type: REDUCER_ACTIONS.UPDATED });
    } catch (err) {
      console.log(err.message);
    }
  }

  async function unlikeMeme(memeId) {
    dispatch({ type: REDUCER_ACTIONS.LOADING });
    console.log("unliking...");
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(`${BASE_URL}/posts/like/${memeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = res;

      if (data.status !== "success")
        throw new Error("Nie udało się odlubić mema");

      await fetchMemes();
      dispatch({ type: REDUCER_ACTIONS.UPDATED });
    } catch (err) {
      console.log(err.message);
    }
  }

  async function dislikeMeme(memeId) {
    dispatch({ type: REDUCER_ACTIONS.LOADING });
    console.log("disliking...");
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `${BASE_URL}/posts/dislike/${memeId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const { data } = res;

      if (data.status !== "success")
        throw new Error("Nie udało się dislajkować mema");

      await fetchMemes();
      dispatch({ type: REDUCER_ACTIONS.UPDATED });
    } catch (err) {
      console.log(err.message);
    }
  }

  async function undislikeMeme(memeId) {
    dispatch({ type: REDUCER_ACTIONS.LOADING });
    console.log("undisliking...");
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(`${BASE_URL}/posts/dislike/${memeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = res;

      if (data.status !== "success")
        throw new Error("Nie udało się undislajkować mema");

      await fetchMemes();
      dispatch({ type: REDUCER_ACTIONS.UPDATED });
    } catch (err) {
      console.log(err.message);
    }
  }

  async function randomMeme() {
    dispatch({ type: REDUCER_ACTIONS.LOADING });
    try {
      const res = await axios.get(`${BASE_URL}/posts/random`);
      // Jeśli backend zwraca {data: {post: ...}}, dostosuj poniższą linię
      dispatch({ type: REDUCER_ACTIONS.CREATED, payload: res.data });
    } catch (err) {
      dispatch({
        type: REDUCER_ACTIONS.REJECTED,
        payload: `Nie udało się pobrać losowego mema: ${err.message}`,
      });
    }
  }

  async function editMeme(memeId, updatedData) {
    dispatch({ type: REDUCER_ACTIONS.LOADING });
    const token = localStorage.getItem("token");
    try {
      const res = await axios.put(`${BASE_URL}/posts/${memeId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;
      if (data.status !== "success")
        throw new Error("Nie udało się edytować mema");
      await fetchMemes();
      dispatch({ type: REDUCER_ACTIONS.UPDATED });
    } catch (err) {
      console.log(err.message);
    }
  }

  return {
    memes,
    isLoading,
    currentMeme,
    createMeme,
    error,
    isDeleteMemeModal,
    isEditMemeModal,
    dispatch,
    deleteMeme,
    likeMeme,
    unlikeMeme,
    dislikeMeme,
    undislikeMeme,
    randomMeme,
    editMeme,
    REDUCER_ACTIONS,
  };
}

const initMemeContextState = {
  memes: [],
  currentMeme: {},
  isLoading: false,
  isDeleteModal: false,
  error: "",
  deleteMeme: async () => {},
  createMeme: async () => {},
  likeMeme: async () => {},
  unlikeMeme: async () => {},
  dislikeMeme: async () => {},
  undislikeMeme: async () => {},
  dispatch: () => {},
  randomMeme: async () => {},
  editMeme: async () => {},
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
