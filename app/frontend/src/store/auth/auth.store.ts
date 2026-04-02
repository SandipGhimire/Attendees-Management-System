import type { AuthStore, LoginDetail } from "@/core/types/auth.type";
import { create } from "zustand";
import { useLoaderStore } from "../app/loader.store";
import api from "@/core/app/api";
import jwtServices from "@/core/app/jwt";
import { isDevelopment } from "@/core/utils/common.utils";
import endpoints from "@/core/app/endpoints";
import type { UserDetail } from "shared-types";

export const useAuthStore = create<AuthStore>((set, get) => ({
  isAuthenticated: false,
  loginDetail: {} as LoginDetail,
  user: {} as UserDetail,
  sessionId: undefined,

  //Setters
  setIsAuthenticated: (isAuthenticated: boolean) => {
    set({ isAuthenticated });
  },
  setLoginDetail: (loginDetail: LoginDetail) => {
    set({ loginDetail });
  },

  //Actions
  login: async (successCallback?: () => void) => {
    const { startLoader, stopLoader } = useLoaderStore.getState();

    startLoader("login");
    await api
      .post(endpoints.auth.login, get().loginDetail)
      .then((res) => {
        if (isDevelopment()) {
          const { accessToken, refreshToken, sessionId } = res.data;
          jwtServices.setToken(accessToken);
          jwtServices.setRefreshToken(refreshToken);
          set({ sessionId });
        }
        set({ isAuthenticated: true, loginDetail: {} as LoginDetail });
        successCallback?.();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        stopLoader("login");
      });
  },

  logout: async (successCallback?: () => void) => {
    await api
      .post(endpoints.auth.logout)
      .then(() => {
        set({ isAuthenticated: false });
        jwtServices.destroyToken();
        successCallback?.();
      })
      .catch(() => {
        set({ isAuthenticated: false });
        jwtServices.destroyToken();
        successCallback?.();
      });
  },

  getUser: async () => {
    await api
      .get(endpoints.user.self)
      .then((res) => {
        const token = jwtServices.getToken();
        let sessionId = undefined;
        if (token) {
          try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            sessionId = payload.sessionId;
          } catch (e) {
            console.error("Failed to decode token", e);
          }
        }
        set({ isAuthenticated: true, user: res.data, sessionId });
      })
      .catch(() => {
        set({ isAuthenticated: false });
      });
  },
}));
