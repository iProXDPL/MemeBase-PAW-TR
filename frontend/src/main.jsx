import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MemeProvider from "./context/MemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <MemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MemeProvider>,
);
