import MainPage from "../pages/MainPage";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      {/* Poniżej placeholder dla <Outlet /> */}
      <MainPage />
    </div>
  );
}

export default AppLayout;
