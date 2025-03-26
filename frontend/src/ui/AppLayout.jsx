import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
