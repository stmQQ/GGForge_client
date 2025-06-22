// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/GGForge_client/">
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
