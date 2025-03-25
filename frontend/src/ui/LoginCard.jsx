import Button from "./Button";
function LoginCard() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Logowanie</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Wpisz email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Hasło</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Wpisz hasło"
              />
            </div>
            <div className="text-sm text-gray-600 mb-4">
              <span className="text-gray-500">Nie masz konta? </span>
              <a href="/rejestracja" className="text-blue-500">Zarejestruj się</a>
            </div>
            {/*
            <div className="text-sm text-gray-600 mb-4">
              <span className="text-gray-500">Problemy z logowaniem? </span>
              <a href="#" className="text-blue-500">Zmiana hasła</a>
            </div>
            */}
             <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Zaloguj się
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default LoginCard;