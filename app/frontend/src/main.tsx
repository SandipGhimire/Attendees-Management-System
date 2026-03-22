import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/css/index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/index.router.ts";

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
