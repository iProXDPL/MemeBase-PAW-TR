import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MemeProvider from "./context/MemeContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import RankingProvider from "./context/RankingContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <MemeProvider>
      <RankingProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </RankingProvider>
    </MemeProvider>
  </AuthProvider>,
);
