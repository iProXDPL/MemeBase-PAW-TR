import MainPage from "../pages/MainPage";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      {/* Poniżej placeholder dla <Outlet /> */}
      <MainPage />
      <Footer />
    </div>
  );
}

export default AppLayout;
