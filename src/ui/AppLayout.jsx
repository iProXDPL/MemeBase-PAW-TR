import MainPage from "../pages/MainPage";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      {/* Poniżej placeholder dla <Outlet /> */}
      <MainPage />
      <Footer />
    </div>
  );
}

export default AppLayout;
