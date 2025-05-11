import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import DeleteMemeModal from "../features/memes/DeleteMemeModal";
import { useContext } from "react";
import { MemeContext } from "../context/MemeContext";

function AppLayout() {
  const { isDeleteMemeModal } = useContext(MemeContext);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      {isDeleteMemeModal && <DeleteMemeModal />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
