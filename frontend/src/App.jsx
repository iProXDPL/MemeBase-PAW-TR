import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./ui/AppLayout";
import MainPage from "./pages/MainPage";
import Ranking from "./pages/Ranking";
import LoginAuth from "./pages/LoginAuth";
import Registration from "./pages/Registration";
import RandomMeme from "./pages/RandomMeme";
import PublishMeme from "./pages/PublishMeme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="logowanie" element={<LoginAuth />} />
          <Route path="rejestracja" element={<Registration />} />
          <Route path="losowymem" element={<RandomMeme />} />
          <Route path="publikuj" element={<PublishMeme />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
