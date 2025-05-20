import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api`;

const REDUCER_ACTION_TYPE = {
  LOADING: "LOADING",
  LOGGEDIN: "LOGGEDIN",
  LOGGED_OUT: "LOGGED_OUT",
};

const initialAuthState = {
  user: {},
  token: localStorage.getItem("token") || "",
  isLoading: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.LOADING: {
      return { ...state, isLoading: true };
    }

    case REDUCER_ACTION_TYPE.LOGGEDIN: {
      return {
        ...state,
        user: action.payload.data.user,
        isLoading: false,
        token: action.payload.token,
      };
    }
    case REDUCER_ACTION_TYPE.REGISTERED: {
      return {
        ...state,
        user: action.payload.data.user,
        isLoading: false,
        token: action.payload.token,
      };
    }

    case REDUCER_ACTION_TYPE.LOGGED_OUT: {
      return {
        ...state,
        user: {},
        token: "",
        isLoading: false,
      };
    }
  }
}

function useAuthContext() {
  const [{ user, isLoading, token }, dispatch] = useReducer(
    authReducer,
    initialAuthState,
  );

  useEffect(
    function () {
      async function user() {
        dispatch({ type: REDUCER_ACTION_TYPE.LOADING });
        try {
          const response = await axios.get(`${BASE_URL}/auth/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const { data } = response;

          dispatch({
            type: REDUCER_ACTION_TYPE.LOGGEDIN,
            payload: { token, data },
          });
        } catch (err) {
          console.log(err.message);
        }
      }

      user();
    },
    [token],
  );

  async function login(username, password) {
    dispatch({ type: REDUCER_ACTION_TYPE.LOADING });
    console.log("logowanie");
    const userDataInput = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        userDataInput,
      );

      const { data } = response;
      localStorage.setItem("token", data.token);

      dispatch({ type: REDUCER_ACTION_TYPE.LOGGEDIN, payload: data });
      return true;
    } catch (err) {
      console.log(err.message);
      return false;
    }
  }

  async function register(username, email, password) {
    dispatch({ type: REDUCER_ACTION_TYPE.LOADING });

    const userDataInput = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/register`,
        userDataInput,
      );

      const { data } = response;
      localStorage.setItem("token", data.token);
      dispatch({ type: REDUCER_ACTION_TYPE.REGISTERED, payload: data });
      return true;
    } catch (err) {
      console.log(err.message);
      return false;
    }
  }

  function logout() {
    localStorage.removeItem("token");
    dispatch({ type: REDUCER_ACTION_TYPE.LOGGED_OUT });
  }

  return { user, isLoading, login, register, token, logout };
}

const initAuthContextState = {
  user: {},
  isLoading: false,
  token: "",
  login: async () => {},
  register: async () => {},
  logout: () => {},
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
};

export const AuthContext = createContext(initAuthContextState);

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={useAuthContext()}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
