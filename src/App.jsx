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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
