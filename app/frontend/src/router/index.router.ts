import type { RouterConfig } from "@/core/types/app/router.type";
import { buildRoutes } from "@/core/utils/router.utils";
import { createBrowserRouter } from "react-router";

const routes: RouterConfig[] = [
  {
    index: true,
    import: () => import("@/views/Auth/Login"),
  },
  {
    path: "login",
    import: () => import("@/views/Auth/Login"),
  },
];

export const router = createBrowserRouter(buildRoutes(routes));
