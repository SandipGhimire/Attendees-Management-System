export interface CreateAttendeePayload {
  name: string;
  email: string;
  phoneNumber: number;
  clubName: string;
  membershipID?: number;
  isVeg: boolean;
  position: string;
}
