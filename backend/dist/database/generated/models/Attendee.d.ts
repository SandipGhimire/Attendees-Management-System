import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttendeeModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendeePayload>;
export type AggregateAttendee = {
    _count: AttendeeCountAggregateOutputType | null;
    _avg: AttendeeAvgAggregateOutputType | null;
    _sum: AttendeeSumAggregateOutputType | null;
    _min: AttendeeMinAggregateOutputType | null;
    _max: AttendeeMaxAggregateOutputType | null;
};
export type AttendeeAvgAggregateOutputType = {
    id: number | null;
};
export type AttendeeSumAggregateOutputType = {
    id: number | null;
};
export type AttendeeMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
    phoneNumber: string | null;
    profilePic: string | null;
    paymentSlip: string | null;
    idCard: string | null;
    clubName: string | null;
    position: string | null;
    membershipID: string | null;
    isVeg: boolean | null;
    qrCode: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AttendeeMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
    phoneNumber: string | null;
    profilePic: string | null;
    paymentSlip: string | null;
    idCard: string | null;
    clubName: string | null;
    position: string | null;
    membershipID: string | null;
    isVeg: boolean | null;
    qrCode: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AttendeeCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    phoneNumber: number;
    profilePic: number;
    paymentSlip: number;
    idCard: number;
    clubName: number;
    position: number;
    membershipID: number;
    isVeg: number;
    qrCode: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AttendeeAvgAggregateInputType = {
    id?: true;
};
export type AttendeeSumAggregateInputType = {
    id?: true;
};
export type AttendeeMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    phoneNumber?: true;
    profilePic?: true;
    paymentSlip?: true;
    idCard?: true;
    clubName?: true;
    position?: true;
    membershipID?: true;
    isVeg?: true;
    qrCode?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AttendeeMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    phoneNumber?: true;
    profilePic?: true;
    paymentSlip?: true;
    idCard?: true;
    clubName?: true;
    position?: true;
    membershipID?: true;
    isVeg?: true;
    qrCode?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AttendeeCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    phoneNumber?: true;
    profilePic?: true;
    paymentSlip?: true;
    idCard?: true;
    clubName?: true;
    position?: true;
    membershipID?: true;
    isVeg?: true;
    qrCode?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AttendeeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendeeWhereInput;
    orderBy?: Prisma.AttendeeOrderByWithRelationInput | Prisma.AttendeeOrderByWithRelationInput[];
    cursor?: Prisma.AttendeeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendeeCountAggregateInputType;
    _avg?: AttendeeAvgAggregateInputType;
    _sum?: AttendeeSumAggregateInputType;
    _min?: AttendeeMinAggregateInputType;
    _max?: AttendeeMaxAggregateInputType;
};
export type GetAttendeeAggregateType<T extends AttendeeAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendee]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendee[P]> : Prisma.GetScalarType<T[P], AggregateAttendee[P]>;
};
export type AttendeeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendeeWhereInput;
    orderBy?: Prisma.AttendeeOrderByWithAggregationInput | Prisma.AttendeeOrderByWithAggregationInput[];
    by: Prisma.AttendeeScalarFieldEnum[] | Prisma.AttendeeScalarFieldEnum;
    having?: Prisma.AttendeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendeeCountAggregateInputType | true;
    _avg?: AttendeeAvgAggregateInputType;
    _sum?: AttendeeSumAggregateInputType;
    _min?: AttendeeMinAggregateInputType;
    _max?: AttendeeMaxAggregateInputType;
};
export type AttendeeGroupByOutputType = {
    id: number;
    email: string;
    name: string;
    phoneNumber: string;
    profilePic: string | null;
    paymentSlip: string | null;
    idCard: string | null;
    clubName: string;
    position: string | null;
    membershipID: string | null;
    isVeg: boolean;
    qrCode: string;
    createdAt: Date;
    updatedAt: Date;
    _count: AttendeeCountAggregateOutputType | null;
    _avg: AttendeeAvgAggregateOutputType | null;
    _sum: AttendeeSumAggregateOutputType | null;
    _min: AttendeeMinAggregateOutputType | null;
    _max: AttendeeMaxAggregateOutputType | null;
};
export type GetAttendeeGroupByPayload<T extends AttendeeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendeeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendeeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendeeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendeeGroupByOutputType[P]>;
}>>;
export type AttendeeWhereInput = {
    AND?: Prisma.AttendeeWhereInput | Prisma.AttendeeWhereInput[];
    OR?: Prisma.AttendeeWhereInput[];
    NOT?: Prisma.AttendeeWhereInput | Prisma.AttendeeWhereInput[];
    id?: Prisma.IntFilter<"Attendee"> | number;
    email?: Prisma.StringFilter<"Attendee"> | string;
    name?: Prisma.StringFilter<"Attendee"> | string;
    phoneNumber?: Prisma.StringFilter<"Attendee"> | string;
    profilePic?: Prisma.StringNullableFilter<"Attendee"> | string | null;
    paymentSlip?: Prisma.StringNullableFilter<"Attendee"> | string | null;
    idCard?: Prisma.StringNullableFilter<"Attendee"> | string | null;
    clubName?: Prisma.StringFilter<"Attendee"> | string;
    position?: Prisma.StringNullableFilter<"Attendee"> | string | null;
    membershipID?: Prisma.StringNullableFilter<"Attendee"> | string | null;
    isVeg?: Prisma.BoolFilter<"Attendee"> | boolean;
    qrCode?: Prisma.StringFilter<"Attendee"> | string;
    createdAt?: Prisma.DateTimeFilter<"Attendee"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Attendee"> | Date | string;
    logs?: Prisma.AttendeeTaskLogListRelationFilter;
};
export type AttendeeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    profilePic?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentSlip?: Prisma.SortOrderInput | Prisma.SortOrder;
    idCard?: Prisma.SortOrderInput | Prisma.SortOrder;
    clubName?: Prisma.SortOrder;
    position?: Prisma.SortOrderInput | Prisma.SortOrder;
    membershipID?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVeg?: Prisma.SortOrder;
    qrCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    logs?: Prisma.AttendeeTaskLogOrderByRelationAggregateInput;
};
export type AttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    phoneNumber?: string;
    membershipID?: string;
    qrCode?: string;
    AND?: Prisma.AttendeeWhereInput | Prisma.AttendeeWhereInput[];
    OR?: Prisma.AttendeeWhereInput[];
    NOT?: Prisma.AttendeeWhereInput | Prisma.AttendeeWhereInput[];
    email?: Prisma.StringFilter<"Attendee"> | string;
    name?: Prisma.StringFilter<"Attendee"> | string;
    profilePic?: Prisma.StringNullableFilter<"Attendee"> | string | null;
    paymentSlip?: Prisma.StringNullableFilter<"Attendee"> | string | null;
    idCard?: Prisma.StringNullableFilter<"Attendee"> | string | null;
    clubName?: Prisma.StringFilter<"Attendee"> | string;
    position?: Prisma.StringNullableFilter<"Attendee"> | string | null;
    isVeg?: Prisma.BoolFilter<"Attendee"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Attendee"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Attendee"> | Date | string;
    logs?: Prisma.AttendeeTaskLogListRelationFilter;
}, "id" | "phoneNumber" | "membershipID" | "qrCode">;
export type AttendeeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    profilePic?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentSlip?: Prisma.SortOrderInput | Prisma.SortOrder;
    idCard?: Prisma.SortOrderInput | Prisma.SortOrder;
    clubName?: Prisma.SortOrder;
    position?: Prisma.SortOrderInput | Prisma.SortOrder;
    membershipID?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVeg?: Prisma.SortOrder;
    qrCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AttendeeCountOrderByAggregateInput;
    _avg?: Prisma.AttendeeAvgOrderByAggregateInput;
    _max?: Prisma.AttendeeMaxOrderByAggregateInput;
    _min?: Prisma.AttendeeMinOrderByAggregateInput;
    _sum?: Prisma.AttendeeSumOrderByAggregateInput;
};
export type AttendeeScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendeeScalarWhereWithAggregatesInput | Prisma.AttendeeScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendeeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendeeScalarWhereWithAggregatesInput | Prisma.AttendeeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Attendee"> | number;
    email?: Prisma.StringWithAggregatesFilter<"Attendee"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Attendee"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"Attendee"> | string;
    profilePic?: Prisma.StringNullableWithAggregatesFilter<"Attendee"> | string | null;
    paymentSlip?: Prisma.StringNullableWithAggregatesFilter<"Attendee"> | string | null;
    idCard?: Prisma.StringNullableWithAggregatesFilter<"Attendee"> | string | null;
    clubName?: Prisma.StringWithAggregatesFilter<"Attendee"> | string;
    position?: Prisma.StringNullableWithAggregatesFilter<"Attendee"> | string | null;
    membershipID?: Prisma.StringNullableWithAggregatesFilter<"Attendee"> | string | null;
    isVeg?: Prisma.BoolWithAggregatesFilter<"Attendee"> | boolean;
    qrCode?: Prisma.StringWithAggregatesFilter<"Attendee"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Attendee"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Attendee"> | Date | string;
};
export type AttendeeCreateInput = {
    email: string;
    name: string;
    phoneNumber: string;
    profilePic?: string | null;
    paymentSlip?: string | null;
    idCard?: string | null;
    clubName: string;
    position?: string | null;
    membershipID?: string | null;
    isVeg: boolean;
    qrCode: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    logs?: Prisma.AttendeeTaskLogCreateNestedManyWithoutAttendeeInput;
};
export type AttendeeUncheckedCreateInput = {
    id?: number;
    email: string;
    name: string;
    phoneNumber: string;
    profilePic?: string | null;
    paymentSlip?: string | null;
    idCard?: string | null;
    clubName: string;
    position?: string | null;
    membershipID?: string | null;
    isVeg: boolean;
    qrCode: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    logs?: Prisma.AttendeeTaskLogUncheckedCreateNestedManyWithoutAttendeeInput;
};
export type AttendeeUpdateInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idCard?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clubName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    membershipID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVeg?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    logs?: Prisma.AttendeeTaskLogUpdateManyWithoutAttendeeNestedInput;
};
export type AttendeeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idCard?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clubName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    membershipID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVeg?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    logs?: Prisma.AttendeeTaskLogUncheckedUpdateManyWithoutAttendeeNestedInput;
};
export type AttendeeCreateManyInput = {
    id?: number;
    email: string;
    name: string;
    phoneNumber: string;
    profilePic?: string | null;
    paymentSlip?: string | null;
    idCard?: string | null;
    clubName: string;
    position?: string | null;
    membershipID?: string | null;
    isVeg: boolean;
    qrCode: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendeeUpdateManyMutationInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idCard?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clubName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    membershipID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVeg?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendeeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idCard?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clubName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    membershipID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVeg?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendeeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    profilePic?: Prisma.SortOrder;
    paymentSlip?: Prisma.SortOrder;
    idCard?: Prisma.SortOrder;
    clubName?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    membershipID?: Prisma.SortOrder;
    isVeg?: Prisma.SortOrder;
    qrCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendeeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AttendeeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    profilePic?: Prisma.SortOrder;
    paymentSlip?: Prisma.SortOrder;
    idCard?: Prisma.SortOrder;
    clubName?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    membershipID?: Prisma.SortOrder;
    isVeg?: Prisma.SortOrder;
    qrCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendeeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    profilePic?: Prisma.SortOrder;
    paymentSlip?: Prisma.SortOrder;
    idCard?: Prisma.SortOrder;
    clubName?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    membershipID?: Prisma.SortOrder;
    isVeg?: Prisma.SortOrder;
    qrCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendeeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AttendeeScalarRelationFilter = {
    is?: Prisma.AttendeeWhereInput;
    isNot?: Prisma.AttendeeWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type AttendeeCreateNestedOneWithoutLogsInput = {
    create?: Prisma.XOR<Prisma.AttendeeCreateWithoutLogsInput, Prisma.AttendeeUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.AttendeeCreateOrConnectWithoutLogsInput;
    connect?: Prisma.AttendeeWhereUniqueInput;
};
export type AttendeeUpdateOneRequiredWithoutLogsNestedInput = {
    create?: Prisma.XOR<Prisma.AttendeeCreateWithoutLogsInput, Prisma.AttendeeUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.AttendeeCreateOrConnectWithoutLogsInput;
    upsert?: Prisma.AttendeeUpsertWithoutLogsInput;
    connect?: Prisma.AttendeeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AttendeeUpdateToOneWithWhereWithoutLogsInput, Prisma.AttendeeUpdateWithoutLogsInput>, Prisma.AttendeeUncheckedUpdateWithoutLogsInput>;
};
export type AttendeeCreateWithoutLogsInput = {
    email: string;
    name: string;
    phoneNumber: string;
    profilePic?: string | null;
    paymentSlip?: string | null;
    idCard?: string | null;
    clubName: string;
    position?: string | null;
    membershipID?: string | null;
    isVeg: boolean;
    qrCode: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendeeUncheckedCreateWithoutLogsInput = {
    id?: number;
    email: string;
    name: string;
    phoneNumber: string;
    profilePic?: string | null;
    paymentSlip?: string | null;
    idCard?: string | null;
    clubName: string;
    position?: string | null;
    membershipID?: string | null;
    isVeg: boolean;
    qrCode: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendeeCreateOrConnectWithoutLogsInput = {
    where: Prisma.AttendeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendeeCreateWithoutLogsInput, Prisma.AttendeeUncheckedCreateWithoutLogsInput>;
};
export type AttendeeUpsertWithoutLogsInput = {
    update: Prisma.XOR<Prisma.AttendeeUpdateWithoutLogsInput, Prisma.AttendeeUncheckedUpdateWithoutLogsInput>;
    create: Prisma.XOR<Prisma.AttendeeCreateWithoutLogsInput, Prisma.AttendeeUncheckedCreateWithoutLogsInput>;
    where?: Prisma.AttendeeWhereInput;
};
export type AttendeeUpdateToOneWithWhereWithoutLogsInput = {
    where?: Prisma.AttendeeWhereInput;
    data: Prisma.XOR<Prisma.AttendeeUpdateWithoutLogsInput, Prisma.AttendeeUncheckedUpdateWithoutLogsInput>;
};
export type AttendeeUpdateWithoutLogsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idCard?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clubName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    membershipID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVeg?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendeeUncheckedUpdateWithoutLogsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idCard?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clubName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    membershipID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVeg?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendeeCountOutputType = {
    logs: number;
};
export type AttendeeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    logs?: boolean | AttendeeCountOutputTypeCountLogsArgs;
};
export type AttendeeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeCountOutputTypeSelect<ExtArgs> | null;
};
export type AttendeeCountOutputTypeCountLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendeeTaskLogWhereInput;
};
export type AttendeeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    phoneNumber?: boolean;
    profilePic?: boolean;
    paymentSlip?: boolean;
    idCard?: boolean;
    clubName?: boolean;
    position?: boolean;
    membershipID?: boolean;
    isVeg?: boolean;
    qrCode?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    logs?: boolean | Prisma.Attendee$logsArgs<ExtArgs>;
    _count?: boolean | Prisma.AttendeeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendee"]>;
export type AttendeeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    phoneNumber?: boolean;
    profilePic?: boolean;
    paymentSlip?: boolean;
    idCard?: boolean;
    clubName?: boolean;
    position?: boolean;
    membershipID?: boolean;
    isVeg?: boolean;
    qrCode?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["attendee"]>;
export type AttendeeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    phoneNumber?: boolean;
    profilePic?: boolean;
    paymentSlip?: boolean;
    idCard?: boolean;
    clubName?: boolean;
    position?: boolean;
    membershipID?: boolean;
    isVeg?: boolean;
    qrCode?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["attendee"]>;
export type AttendeeSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    phoneNumber?: boolean;
    profilePic?: boolean;
    paymentSlip?: boolean;
    idCard?: boolean;
    clubName?: boolean;
    position?: boolean;
    membershipID?: boolean;
    isVeg?: boolean;
    qrCode?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AttendeeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name" | "phoneNumber" | "profilePic" | "paymentSlip" | "idCard" | "clubName" | "position" | "membershipID" | "isVeg" | "qrCode" | "createdAt" | "updatedAt", ExtArgs["result"]["attendee"]>;
export type AttendeeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    logs?: boolean | Prisma.Attendee$logsArgs<ExtArgs>;
    _count?: boolean | Prisma.AttendeeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AttendeeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AttendeeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AttendeePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Attendee";
    objects: {
        logs: Prisma.$AttendeeTaskLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        email: string;
        name: string;
        phoneNumber: string;
        profilePic: string | null;
        paymentSlip: string | null;
        idCard: string | null;
        clubName: string;
        position: string | null;
        membershipID: string | null;
        isVeg: boolean;
        qrCode: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["attendee"]>;
    composites: {};
};
export type AttendeeGetPayload<S extends boolean | null | undefined | AttendeeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendeePayload, S>;
export type AttendeeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendeeCountAggregateInputType | true;
};
export interface AttendeeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Attendee'];
        meta: {
            name: 'Attendee';
        };
    };
    findUnique<T extends AttendeeFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendeeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendeeClient<runtime.Types.Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendeeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendeeClient<runtime.Types.Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendeeFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendeeFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendeeClient<runtime.Types.Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendeeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendeeClient<runtime.Types.Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendeeFindManyArgs>(args?: Prisma.SelectSubset<T, AttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendeeCreateArgs>(args: Prisma.SelectSubset<T, AttendeeCreateArgs<ExtArgs>>): Prisma.Prisma__AttendeeClient<runtime.Types.Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendeeCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendeeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendeeDeleteArgs>(args: Prisma.SelectSubset<T, AttendeeDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendeeClient<runtime.Types.Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendeeUpdateArgs>(args: Prisma.SelectSubset<T, AttendeeUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendeeClient<runtime.Types.Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendeeDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendeeUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendeeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendeeUpsertArgs>(args: Prisma.SelectSubset<T, AttendeeUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendeeClient<runtime.Types.Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendeeCountArgs>(args?: Prisma.Subset<T, AttendeeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendeeCountAggregateOutputType> : number>;
    aggregate<T extends AttendeeAggregateArgs>(args: Prisma.Subset<T, AttendeeAggregateArgs>): Prisma.PrismaPromise<GetAttendeeAggregateType<T>>;
    groupBy<T extends AttendeeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendeeGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendeeGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendeeFieldRefs;
}
export interface Prisma__AttendeeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    logs<T extends Prisma.Attendee$logsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Attendee$logsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendeeFieldRefs {
    readonly id: Prisma.FieldRef<"Attendee", 'Int'>;
    readonly email: Prisma.FieldRef<"Attendee", 'String'>;
    readonly name: Prisma.FieldRef<"Attendee", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"Attendee", 'String'>;
    readonly profilePic: Prisma.FieldRef<"Attendee", 'String'>;
    readonly paymentSlip: Prisma.FieldRef<"Attendee", 'String'>;
    readonly idCard: Prisma.FieldRef<"Attendee", 'String'>;
    readonly clubName: Prisma.FieldRef<"Attendee", 'String'>;
    readonly position: Prisma.FieldRef<"Attendee", 'String'>;
    readonly membershipID: Prisma.FieldRef<"Attendee", 'String'>;
    readonly isVeg: Prisma.FieldRef<"Attendee", 'Boolean'>;
    readonly qrCode: Prisma.FieldRef<"Attendee", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Attendee", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Attendee", 'DateTime'>;
}
export type AttendeeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeOmit<ExtArgs> | null;
    include?: Prisma.AttendeeInclude<ExtArgs> | null;
    where: Prisma.AttendeeWhereUniqueInput;
};
export type AttendeeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeOmit<ExtArgs> | null;
    include?: Prisma.AttendeeInclude<ExtArgs> | null;
    where: Prisma.AttendeeWhereUniqueInput;
};
export type AttendeeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeOmit<ExtArgs> | null;
    include?: Prisma.AttendeeInclude<ExtArgs> | null;
    where?: Prisma.AttendeeWhereInput;
    orderBy?: Prisma.AttendeeOrderByWithRelationInput | Prisma.AttendeeOrderByWithRelationInput[];
    cursor?: Prisma.AttendeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendeeScalarFieldEnum | Prisma.AttendeeScalarFieldEnum[];
};
export type AttendeeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeOmit<ExtArgs> | null;
    include?: Prisma.AttendeeInclude<ExtArgs> | null;
    where?: Prisma.AttendeeWhereInput;
    orderBy?: Prisma.AttendeeOrderByWithRelationInput | Prisma.AttendeeOrderByWithRelationInput[];
    cursor?: Prisma.AttendeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendeeScalarFieldEnum | Prisma.AttendeeScalarFieldEnum[];
};
export type AttendeeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeOmit<ExtArgs> | null;
    include?: Prisma.AttendeeInclude<ExtArgs> | null;
    where?: Prisma.AttendeeWhereInput;
    orderBy?: Prisma.AttendeeOrderByWithRelationInput | Prisma.AttendeeOrderByWithRelationInput[];
    cursor?: Prisma.AttendeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendeeScalarFieldEnum | Prisma.AttendeeScalarFieldEnum[];
};
export type AttendeeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeOmit<ExtArgs> | null;
    include?: Prisma.AttendeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendeeCreateInput, Prisma.AttendeeUncheckedCreateInput>;
};
export type AttendeeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendeeCreateManyInput | Prisma.AttendeeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendeeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendeeOmit<ExtArgs> | null;
    data: Prisma.AttendeeCreateManyInput | Prisma.AttendeeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendeeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeOmit<ExtArgs> | null;
    include?: Prisma.AttendeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendeeUpdateInput, Prisma.AttendeeUncheckedUpdateInput>;
    where: Prisma.AttendeeWhereUniqueInput;
};
export type AttendeeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendeeUpdateManyMutationInput, Prisma.AttendeeUncheckedUpdateManyInput>;
    where?: Prisma.AttendeeWhereInput;
    limit?: number;
};
export type AttendeeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendeeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendeeUpdateManyMutationInput, Prisma.AttendeeUncheckedUpdateManyInput>;
    where?: Prisma.AttendeeWhereInput;
    limit?: number;
};
export type AttendeeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeOmit<ExtArgs> | null;
    include?: Prisma.AttendeeInclude<ExtArgs> | null;
    where: Prisma.AttendeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendeeCreateInput, Prisma.AttendeeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendeeUpdateInput, Prisma.AttendeeUncheckedUpdateInput>;
};
export type AttendeeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeOmit<ExtArgs> | null;
    include?: Prisma.AttendeeInclude<ExtArgs> | null;
    where: Prisma.AttendeeWhereUniqueInput;
};
export type AttendeeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendeeWhereInput;
    limit?: number;
};
export type Attendee$logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeTaskLogSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeTaskLogOmit<ExtArgs> | null;
    include?: Prisma.AttendeeTaskLogInclude<ExtArgs> | null;
    where?: Prisma.AttendeeTaskLogWhereInput;
    orderBy?: Prisma.AttendeeTaskLogOrderByWithRelationInput | Prisma.AttendeeTaskLogOrderByWithRelationInput[];
    cursor?: Prisma.AttendeeTaskLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendeeTaskLogScalarFieldEnum | Prisma.AttendeeTaskLogScalarFieldEnum[];
};
export type AttendeeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeOmit<ExtArgs> | null;
    include?: Prisma.AttendeeInclude<ExtArgs> | null;
};
