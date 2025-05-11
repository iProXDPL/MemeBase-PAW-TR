import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

// const setToken = (token) => {
//   localStorage.setItem("token", token);
// };

function LoginCard() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("click");
    const success = await login(username, password);
    if (success) navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold">Logowanie</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-700">
              Nazwa użytkownika
            </label>
            <input
              type="text"
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Wpisz nazwę użytkownika"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-700">Hasło</label>
            <input
              type="password"
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Wpisz hasło"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="mb-4 text-sm text-gray-600">
            <span className="text-gray-500">Nie masz konta? </span>
            <NavLink to="/rejestracja" className="text-blue-500">
              Zarejestruj się
            </NavLink>
          </div>
          {/*
            <div className="text-sm text-gray-600 mb-4">
              <span className="text-gray-500">Problemy z logowaniem? </span>
              <a href="#" className="text-blue-500">Zmiana hasła</a>
            </div>
            */}
          <button className="w-full rounded-lg bg-purple-600 py-2 text-white hover:bg-purple-700">
            Zaloguj się
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginCard;
