import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";

//import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
