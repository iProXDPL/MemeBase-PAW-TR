import Button from "../../ui/Button";
function LoginCard() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold">Logowanie</h2>
        <form>
          <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-700">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Wpisz email"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-700">Hasło</label>
            <input
              type="password"
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Wpisz hasło"
            />
          </div>
          <div className="mb-4 text-sm text-gray-600">
            <span className="text-gray-500">Nie masz konta? </span>
            <a href="/rejestracja" className="text-blue-500">
              Zarejestruj się
            </a>
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
