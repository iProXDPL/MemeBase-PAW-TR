import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  // Komponent odpowiedzialny za umieszczanie głównego komponentu w między nagłówkiem a stopką
  return (
    <div className="overflow-x-hidden">
      <Header />
      {/* Outlet powoduje renderowanie komponentu przekazanego w parametrze "element" w ścieżce Route w pliku App.jsx */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
