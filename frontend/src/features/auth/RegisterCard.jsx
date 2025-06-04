import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

function RegisterCard() {
  const { register, error, isLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const success = await register(username, email, password);
    if (success) navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold">Rejestracja</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-700">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Wpisz email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-700">
              Nazwa użytkownika
            </label>
            <input
              type="text"
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Wpisz nazwe użytkownika"
              defaultValue={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-700">Hasło</label>
            <input
              type="password"
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Wpisz hasło"
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-700">
              Powtórz hasło
            </label>
            <input
              type="password"
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Wpisz ponownie hasło"
            />
          </div> */}
          <div className="mb-4 text-sm text-gray-600">
            <span className="text-gray-500">Masz już konto? </span>
            <NavLink to="/logowanie" className="text-blue-500">
              Zaloguj się
            </NavLink>
          </div>
          <button
            disabled={isLoading}
            className="w-full rounded-lg bg-purple-600 py-2 text-white hover:bg-purple-700"
          >
            Zarejestruj się
          </button>
          {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default RegisterCard;
