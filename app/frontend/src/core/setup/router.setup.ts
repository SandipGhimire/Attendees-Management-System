import { redirect } from "react-router";
import type { RouteMeta } from "../types/app/router.type";

export async function beforeRoute(meta?: RouteMeta) {
  if (!meta) return null;

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (meta.require_auth && !token) {
    throw redirect("/login");
  }

  if (meta.permissions) {
    const required = Array.isArray(meta.permissions) ? meta.permissions : [meta.permissions];

    const hasPermission = required.some((p) => user?.permissions?.includes(p));

    if (!hasPermission) {
      throw redirect("/dashboard");
    }
  }

  return null;
}
