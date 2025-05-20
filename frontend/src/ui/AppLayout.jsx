import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import DeleteMemeModal from "../features/memes/DeleteMemeModal";
import EditMemeModal from "../features/memes/EditMemeModal";
import { useContext } from "react";
import { MemeContext } from "../context/MemeContext";

function AppLayout() {
  const { isDeleteMemeModal, isEditMemeModal } = useContext(MemeContext);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      {isDeleteMemeModal && <DeleteMemeModal />}
      {isEditMemeModal && <EditMemeModal />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
