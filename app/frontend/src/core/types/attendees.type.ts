import type { CreateAttendeePayload } from "shared-types";

export interface AttendeeState {
  isCreateModalOpen: boolean;
  createForm: CreateAttendeePayload;
  errors: any;

  openCreateModal: () => void;
  closeCreateModal: () => void;
  setCreateFormField: <K extends keyof CreateAttendeePayload>(field: K, value: CreateAttendeePayload[K]) => void;
  resetCreateForm: () => void;
  createAttendee: (successCallback?: () => void) => Promise<void>;

  setError: (errors: any) => void;
}
