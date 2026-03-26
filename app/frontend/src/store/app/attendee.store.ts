import { create } from "zustand";
import api from "@/core/app/api";
import endpoints from "@/core/app/endpoints";
import { useLoaderStore } from "@/store/app/loader.store";
import type { CreateAttendeePayload } from "shared-types";
import type { AttendeeState } from "@/core/types/attendees.type";

const defaultForm: CreateAttendeePayload = {
  name: "",
  email: "",
  phoneNumber: "",
  clubName: "",
  membershipID: null as unknown as number,
  isVeg: false,
  position: "",
};

export const useAttendeeStore = create<AttendeeState>((set, get) => ({
  isCreateModalOpen: false,
  createForm: { ...defaultForm },
  errors: null,

  openCreateModal: () => set({ isCreateModalOpen: true }),

  closeCreateModal: () => {
    set({ isCreateModalOpen: false, createForm: { ...defaultForm } });
  },

  setCreateFormField: (field, value) => {
    set((state) => ({
      createForm: { ...state.createForm, [field]: value },
    }));
  },

  resetCreateForm: () => set({ createForm: { ...defaultForm } }),

  createAttendee: async (successCallback?: () => void) => {
    const { startLoader, stopLoader } = useLoaderStore.getState();
    const { createForm } = get();

    startLoader("createAttendee");

    await api
      .post(endpoints.attendees.create, { ...createForm })
      .then(() => {
        get().closeCreateModal();
        successCallback?.();
      })
      .catch((err) => {
        get().setError(err.response.data.error);
      })
      .finally(() => {
        stopLoader("createAttendee");
      });
  },

  setError: (errors: any) => {
    set({ errors });
    setTimeout(() => set({ errors: null }), 5000);
  },
}));
