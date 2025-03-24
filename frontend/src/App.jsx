import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./ui/AppLayout";
import MainPage from "./pages/MainPage";
import Ranking from "./pages/Ranking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path="ranking" element={<Ranking />} />
          {/* Poniżej przykładowa ścieżka nawigująca do widoku z logowaniem (nastepnie patrz plik AppLayout.jsx), "element" oznacza jaki komponent ma być renderowany na tej ścieżce (w tym przypadku komponent z logowaniem) */}
          {/* <Route path="logowanie" element={<LoginAuth />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
