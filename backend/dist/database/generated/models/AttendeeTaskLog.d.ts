import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttendeeTaskLogModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendeeTaskLogPayload>;
export type AggregateAttendeeTaskLog = {
    _count: AttendeeTaskLogCountAggregateOutputType | null;
    _avg: AttendeeTaskLogAvgAggregateOutputType | null;
    _sum: AttendeeTaskLogSumAggregateOutputType | null;
    _min: AttendeeTaskLogMinAggregateOutputType | null;
    _max: AttendeeTaskLogMaxAggregateOutputType | null;
};
export type AttendeeTaskLogAvgAggregateOutputType = {
    id: number | null;
    attendeeId: number | null;
    taskId: number | null;
};
export type AttendeeTaskLogSumAggregateOutputType = {
    id: number | null;
    attendeeId: number | null;
    taskId: number | null;
};
export type AttendeeTaskLogMinAggregateOutputType = {
    id: number | null;
    attendeeId: number | null;
    taskId: number | null;
    scannedBy: string | null;
    createdAt: Date | null;
};
export type AttendeeTaskLogMaxAggregateOutputType = {
    id: number | null;
    attendeeId: number | null;
    taskId: number | null;
    scannedBy: string | null;
    createdAt: Date | null;
};
export type AttendeeTaskLogCountAggregateOutputType = {
    id: number;
    attendeeId: number;
    taskId: number;
    scannedBy: number;
    createdAt: number;
    _all: number;
};
export type AttendeeTaskLogAvgAggregateInputType = {
    id?: true;
    attendeeId?: true;
    taskId?: true;
};
export type AttendeeTaskLogSumAggregateInputType = {
    id?: true;
    attendeeId?: true;
    taskId?: true;
};
export type AttendeeTaskLogMinAggregateInputType = {
    id?: true;
    attendeeId?: true;
    taskId?: true;
    scannedBy?: true;
    createdAt?: true;
};
export type AttendeeTaskLogMaxAggregateInputType = {
    id?: true;
    attendeeId?: true;
    taskId?: true;
    scannedBy?: true;
    createdAt?: true;
};
export type AttendeeTaskLogCountAggregateInputType = {
    id?: true;
    attendeeId?: true;
    taskId?: true;
    scannedBy?: true;
    createdAt?: true;
    _all?: true;
};
export type AttendeeTaskLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendeeTaskLogWhereInput;
    orderBy?: Prisma.AttendeeTaskLogOrderByWithRelationInput | Prisma.AttendeeTaskLogOrderByWithRelationInput[];
    cursor?: Prisma.AttendeeTaskLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendeeTaskLogCountAggregateInputType;
    _avg?: AttendeeTaskLogAvgAggregateInputType;
    _sum?: AttendeeTaskLogSumAggregateInputType;
    _min?: AttendeeTaskLogMinAggregateInputType;
    _max?: AttendeeTaskLogMaxAggregateInputType;
};
export type GetAttendeeTaskLogAggregateType<T extends AttendeeTaskLogAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendeeTaskLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendeeTaskLog[P]> : Prisma.GetScalarType<T[P], AggregateAttendeeTaskLog[P]>;
};
export type AttendeeTaskLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendeeTaskLogWhereInput;
    orderBy?: Prisma.AttendeeTaskLogOrderByWithAggregationInput | Prisma.AttendeeTaskLogOrderByWithAggregationInput[];
    by: Prisma.AttendeeTaskLogScalarFieldEnum[] | Prisma.AttendeeTaskLogScalarFieldEnum;
    having?: Prisma.AttendeeTaskLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendeeTaskLogCountAggregateInputType | true;
    _avg?: AttendeeTaskLogAvgAggregateInputType;
    _sum?: AttendeeTaskLogSumAggregateInputType;
    _min?: AttendeeTaskLogMinAggregateInputType;
    _max?: AttendeeTaskLogMaxAggregateInputType;
};
export type AttendeeTaskLogGroupByOutputType = {
    id: number;
    attendeeId: number;
    taskId: number;
    scannedBy: string | null;
    createdAt: Date;
    _count: AttendeeTaskLogCountAggregateOutputType | null;
    _avg: AttendeeTaskLogAvgAggregateOutputType | null;
    _sum: AttendeeTaskLogSumAggregateOutputType | null;
    _min: AttendeeTaskLogMinAggregateOutputType | null;
    _max: AttendeeTaskLogMaxAggregateOutputType | null;
};
export type GetAttendeeTaskLogGroupByPayload<T extends AttendeeTaskLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendeeTaskLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendeeTaskLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendeeTaskLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendeeTaskLogGroupByOutputType[P]>;
}>>;
export type AttendeeTaskLogWhereInput = {
    AND?: Prisma.AttendeeTaskLogWhereInput | Prisma.AttendeeTaskLogWhereInput[];
    OR?: Prisma.AttendeeTaskLogWhereInput[];
    NOT?: Prisma.AttendeeTaskLogWhereInput | Prisma.AttendeeTaskLogWhereInput[];
    id?: Prisma.IntFilter<"AttendeeTaskLog"> | number;
    attendeeId?: Prisma.IntFilter<"AttendeeTaskLog"> | number;
    taskId?: Prisma.IntFilter<"AttendeeTaskLog"> | number;
    scannedBy?: Prisma.StringNullableFilter<"AttendeeTaskLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendeeTaskLog"> | Date | string;
    attendee?: Prisma.XOR<Prisma.AttendeeScalarRelationFilter, Prisma.AttendeeWhereInput>;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
};
export type AttendeeTaskLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    scannedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    attendee?: Prisma.AttendeeOrderByWithRelationInput;
    task?: Prisma.TaskOrderByWithRelationInput;
};
export type AttendeeTaskLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    attendeeId_taskId?: Prisma.AttendeeTaskLogAttendeeIdTaskIdCompoundUniqueInput;
    AND?: Prisma.AttendeeTaskLogWhereInput | Prisma.AttendeeTaskLogWhereInput[];
    OR?: Prisma.AttendeeTaskLogWhereInput[];
    NOT?: Prisma.AttendeeTaskLogWhereInput | Prisma.AttendeeTaskLogWhereInput[];
    attendeeId?: Prisma.IntFilter<"AttendeeTaskLog"> | number;
    taskId?: Prisma.IntFilter<"AttendeeTaskLog"> | number;
    scannedBy?: Prisma.StringNullableFilter<"AttendeeTaskLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendeeTaskLog"> | Date | string;
    attendee?: Prisma.XOR<Prisma.AttendeeScalarRelationFilter, Prisma.AttendeeWhereInput>;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
}, "id" | "attendeeId_taskId">;
export type AttendeeTaskLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    scannedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AttendeeTaskLogCountOrderByAggregateInput;
    _avg?: Prisma.AttendeeTaskLogAvgOrderByAggregateInput;
    _max?: Prisma.AttendeeTaskLogMaxOrderByAggregateInput;
    _min?: Prisma.AttendeeTaskLogMinOrderByAggregateInput;
    _sum?: Prisma.AttendeeTaskLogSumOrderByAggregateInput;
};
export type AttendeeTaskLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendeeTaskLogScalarWhereWithAggregatesInput | Prisma.AttendeeTaskLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendeeTaskLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendeeTaskLogScalarWhereWithAggregatesInput | Prisma.AttendeeTaskLogScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AttendeeTaskLog"> | number;
    attendeeId?: Prisma.IntWithAggregatesFilter<"AttendeeTaskLog"> | number;
    taskId?: Prisma.IntWithAggregatesFilter<"AttendeeTaskLog"> | number;
    scannedBy?: Prisma.StringNullableWithAggregatesFilter<"AttendeeTaskLog"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AttendeeTaskLog"> | Date | string;
};
export type AttendeeTaskLogCreateInput = {
    scannedBy?: string | null;
    createdAt?: Date | string;
    attendee: Prisma.AttendeeCreateNestedOneWithoutLogsInput;
    task: Prisma.TaskCreateNestedOneWithoutLogsInput;
};
export type AttendeeTaskLogUncheckedCreateInput = {
    id?: number;
    attendeeId: number;
    taskId: number;
    scannedBy?: string | null;
    createdAt?: Date | string;
};
export type AttendeeTaskLogUpdateInput = {
    scannedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendee?: Prisma.AttendeeUpdateOneRequiredWithoutLogsNestedInput;
    task?: Prisma.TaskUpdateOneRequiredWithoutLogsNestedInput;
};
export type AttendeeTaskLogUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    attendeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    taskId?: Prisma.IntFieldUpdateOperationsInput | number;
    scannedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendeeTaskLogCreateManyInput = {
    id?: number;
    attendeeId: number;
    taskId: number;
    scannedBy?: string | null;
    createdAt?: Date | string;
};
export type AttendeeTaskLogUpdateManyMutationInput = {
    scannedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendeeTaskLogUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    attendeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    taskId?: Prisma.IntFieldUpdateOperationsInput | number;
    scannedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendeeTaskLogListRelationFilter = {
    every?: Prisma.AttendeeTaskLogWhereInput;
    some?: Prisma.AttendeeTaskLogWhereInput;
    none?: Prisma.AttendeeTaskLogWhereInput;
};
export type AttendeeTaskLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendeeTaskLogAttendeeIdTaskIdCompoundUniqueInput = {
    attendeeId: number;
    taskId: number;
};
export type AttendeeTaskLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    scannedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendeeTaskLogAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
};
export type AttendeeTaskLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    scannedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendeeTaskLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    scannedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendeeTaskLogSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
};
export type AttendeeTaskLogCreateNestedManyWithoutAttendeeInput = {
    create?: Prisma.XOR<Prisma.AttendeeTaskLogCreateWithoutAttendeeInput, Prisma.AttendeeTaskLogUncheckedCreateWithoutAttendeeInput> | Prisma.AttendeeTaskLogCreateWithoutAttendeeInput[] | Prisma.AttendeeTaskLogUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.AttendeeTaskLogCreateOrConnectWithoutAttendeeInput | Prisma.AttendeeTaskLogCreateOrConnectWithoutAttendeeInput[];
    createMany?: Prisma.AttendeeTaskLogCreateManyAttendeeInputEnvelope;
    connect?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
};
export type AttendeeTaskLogUncheckedCreateNestedManyWithoutAttendeeInput = {
    create?: Prisma.XOR<Prisma.AttendeeTaskLogCreateWithoutAttendeeInput, Prisma.AttendeeTaskLogUncheckedCreateWithoutAttendeeInput> | Prisma.AttendeeTaskLogCreateWithoutAttendeeInput[] | Prisma.AttendeeTaskLogUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.AttendeeTaskLogCreateOrConnectWithoutAttendeeInput | Prisma.AttendeeTaskLogCreateOrConnectWithoutAttendeeInput[];
    createMany?: Prisma.AttendeeTaskLogCreateManyAttendeeInputEnvelope;
    connect?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
};
export type AttendeeTaskLogUpdateManyWithoutAttendeeNestedInput = {
    create?: Prisma.XOR<Prisma.AttendeeTaskLogCreateWithoutAttendeeInput, Prisma.AttendeeTaskLogUncheckedCreateWithoutAttendeeInput> | Prisma.AttendeeTaskLogCreateWithoutAttendeeInput[] | Prisma.AttendeeTaskLogUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.AttendeeTaskLogCreateOrConnectWithoutAttendeeInput | Prisma.AttendeeTaskLogCreateOrConnectWithoutAttendeeInput[];
    upsert?: Prisma.AttendeeTaskLogUpsertWithWhereUniqueWithoutAttendeeInput | Prisma.AttendeeTaskLogUpsertWithWhereUniqueWithoutAttendeeInput[];
    createMany?: Prisma.AttendeeTaskLogCreateManyAttendeeInputEnvelope;
    set?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    disconnect?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    delete?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    connect?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    update?: Prisma.AttendeeTaskLogUpdateWithWhereUniqueWithoutAttendeeInput | Prisma.AttendeeTaskLogUpdateWithWhereUniqueWithoutAttendeeInput[];
    updateMany?: Prisma.AttendeeTaskLogUpdateManyWithWhereWithoutAttendeeInput | Prisma.AttendeeTaskLogUpdateManyWithWhereWithoutAttendeeInput[];
    deleteMany?: Prisma.AttendeeTaskLogScalarWhereInput | Prisma.AttendeeTaskLogScalarWhereInput[];
};
export type AttendeeTaskLogUncheckedUpdateManyWithoutAttendeeNestedInput = {
    create?: Prisma.XOR<Prisma.AttendeeTaskLogCreateWithoutAttendeeInput, Prisma.AttendeeTaskLogUncheckedCreateWithoutAttendeeInput> | Prisma.AttendeeTaskLogCreateWithoutAttendeeInput[] | Prisma.AttendeeTaskLogUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.AttendeeTaskLogCreateOrConnectWithoutAttendeeInput | Prisma.AttendeeTaskLogCreateOrConnectWithoutAttendeeInput[];
    upsert?: Prisma.AttendeeTaskLogUpsertWithWhereUniqueWithoutAttendeeInput | Prisma.AttendeeTaskLogUpsertWithWhereUniqueWithoutAttendeeInput[];
    createMany?: Prisma.AttendeeTaskLogCreateManyAttendeeInputEnvelope;
    set?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    disconnect?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    delete?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    connect?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    update?: Prisma.AttendeeTaskLogUpdateWithWhereUniqueWithoutAttendeeInput | Prisma.AttendeeTaskLogUpdateWithWhereUniqueWithoutAttendeeInput[];
    updateMany?: Prisma.AttendeeTaskLogUpdateManyWithWhereWithoutAttendeeInput | Prisma.AttendeeTaskLogUpdateManyWithWhereWithoutAttendeeInput[];
    deleteMany?: Prisma.AttendeeTaskLogScalarWhereInput | Prisma.AttendeeTaskLogScalarWhereInput[];
};
export type AttendeeTaskLogCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.AttendeeTaskLogCreateWithoutTaskInput, Prisma.AttendeeTaskLogUncheckedCreateWithoutTaskInput> | Prisma.AttendeeTaskLogCreateWithoutTaskInput[] | Prisma.AttendeeTaskLogUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.AttendeeTaskLogCreateOrConnectWithoutTaskInput | Prisma.AttendeeTaskLogCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.AttendeeTaskLogCreateManyTaskInputEnvelope;
    connect?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
};
export type AttendeeTaskLogUncheckedCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.AttendeeTaskLogCreateWithoutTaskInput, Prisma.AttendeeTaskLogUncheckedCreateWithoutTaskInput> | Prisma.AttendeeTaskLogCreateWithoutTaskInput[] | Prisma.AttendeeTaskLogUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.AttendeeTaskLogCreateOrConnectWithoutTaskInput | Prisma.AttendeeTaskLogCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.AttendeeTaskLogCreateManyTaskInputEnvelope;
    connect?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
};
export type AttendeeTaskLogUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.AttendeeTaskLogCreateWithoutTaskInput, Prisma.AttendeeTaskLogUncheckedCreateWithoutTaskInput> | Prisma.AttendeeTaskLogCreateWithoutTaskInput[] | Prisma.AttendeeTaskLogUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.AttendeeTaskLogCreateOrConnectWithoutTaskInput | Prisma.AttendeeTaskLogCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.AttendeeTaskLogUpsertWithWhereUniqueWithoutTaskInput | Prisma.AttendeeTaskLogUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.AttendeeTaskLogCreateManyTaskInputEnvelope;
    set?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    disconnect?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    delete?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    connect?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    update?: Prisma.AttendeeTaskLogUpdateWithWhereUniqueWithoutTaskInput | Prisma.AttendeeTaskLogUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.AttendeeTaskLogUpdateManyWithWhereWithoutTaskInput | Prisma.AttendeeTaskLogUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.AttendeeTaskLogScalarWhereInput | Prisma.AttendeeTaskLogScalarWhereInput[];
};
export type AttendeeTaskLogUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.AttendeeTaskLogCreateWithoutTaskInput, Prisma.AttendeeTaskLogUncheckedCreateWithoutTaskInput> | Prisma.AttendeeTaskLogCreateWithoutTaskInput[] | Prisma.AttendeeTaskLogUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.AttendeeTaskLogCreateOrConnectWithoutTaskInput | Prisma.AttendeeTaskLogCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.AttendeeTaskLogUpsertWithWhereUniqueWithoutTaskInput | Prisma.AttendeeTaskLogUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.AttendeeTaskLogCreateManyTaskInputEnvelope;
    set?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    disconnect?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    delete?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    connect?: Prisma.AttendeeTaskLogWhereUniqueInput | Prisma.AttendeeTaskLogWhereUniqueInput[];
    update?: Prisma.AttendeeTaskLogUpdateWithWhereUniqueWithoutTaskInput | Prisma.AttendeeTaskLogUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.AttendeeTaskLogUpdateManyWithWhereWithoutTaskInput | Prisma.AttendeeTaskLogUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.AttendeeTaskLogScalarWhereInput | Prisma.AttendeeTaskLogScalarWhereInput[];
};
export type AttendeeTaskLogCreateWithoutAttendeeInput = {
    scannedBy?: string | null;
    createdAt?: Date | string;
    task: Prisma.TaskCreateNestedOneWithoutLogsInput;
};
export type AttendeeTaskLogUncheckedCreateWithoutAttendeeInput = {
    id?: number;
    taskId: number;
    scannedBy?: string | null;
    createdAt?: Date | string;
};
export type AttendeeTaskLogCreateOrConnectWithoutAttendeeInput = {
    where: Prisma.AttendeeTaskLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendeeTaskLogCreateWithoutAttendeeInput, Prisma.AttendeeTaskLogUncheckedCreateWithoutAttendeeInput>;
};
export type AttendeeTaskLogCreateManyAttendeeInputEnvelope = {
    data: Prisma.AttendeeTaskLogCreateManyAttendeeInput | Prisma.AttendeeTaskLogCreateManyAttendeeInput[];
    skipDuplicates?: boolean;
};
export type AttendeeTaskLogUpsertWithWhereUniqueWithoutAttendeeInput = {
    where: Prisma.AttendeeTaskLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendeeTaskLogUpdateWithoutAttendeeInput, Prisma.AttendeeTaskLogUncheckedUpdateWithoutAttendeeInput>;
    create: Prisma.XOR<Prisma.AttendeeTaskLogCreateWithoutAttendeeInput, Prisma.AttendeeTaskLogUncheckedCreateWithoutAttendeeInput>;
};
export type AttendeeTaskLogUpdateWithWhereUniqueWithoutAttendeeInput = {
    where: Prisma.AttendeeTaskLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendeeTaskLogUpdateWithoutAttendeeInput, Prisma.AttendeeTaskLogUncheckedUpdateWithoutAttendeeInput>;
};
export type AttendeeTaskLogUpdateManyWithWhereWithoutAttendeeInput = {
    where: Prisma.AttendeeTaskLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendeeTaskLogUpdateManyMutationInput, Prisma.AttendeeTaskLogUncheckedUpdateManyWithoutAttendeeInput>;
};
export type AttendeeTaskLogScalarWhereInput = {
    AND?: Prisma.AttendeeTaskLogScalarWhereInput | Prisma.AttendeeTaskLogScalarWhereInput[];
    OR?: Prisma.AttendeeTaskLogScalarWhereInput[];
    NOT?: Prisma.AttendeeTaskLogScalarWhereInput | Prisma.AttendeeTaskLogScalarWhereInput[];
    id?: Prisma.IntFilter<"AttendeeTaskLog"> | number;
    attendeeId?: Prisma.IntFilter<"AttendeeTaskLog"> | number;
    taskId?: Prisma.IntFilter<"AttendeeTaskLog"> | number;
    scannedBy?: Prisma.StringNullableFilter<"AttendeeTaskLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendeeTaskLog"> | Date | string;
};
export type AttendeeTaskLogCreateWithoutTaskInput = {
    scannedBy?: string | null;
    createdAt?: Date | string;
    attendee: Prisma.AttendeeCreateNestedOneWithoutLogsInput;
};
export type AttendeeTaskLogUncheckedCreateWithoutTaskInput = {
    id?: number;
    attendeeId: number;
    scannedBy?: string | null;
    createdAt?: Date | string;
};
export type AttendeeTaskLogCreateOrConnectWithoutTaskInput = {
    where: Prisma.AttendeeTaskLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendeeTaskLogCreateWithoutTaskInput, Prisma.AttendeeTaskLogUncheckedCreateWithoutTaskInput>;
};
export type AttendeeTaskLogCreateManyTaskInputEnvelope = {
    data: Prisma.AttendeeTaskLogCreateManyTaskInput | Prisma.AttendeeTaskLogCreateManyTaskInput[];
    skipDuplicates?: boolean;
};
export type AttendeeTaskLogUpsertWithWhereUniqueWithoutTaskInput = {
    where: Prisma.AttendeeTaskLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendeeTaskLogUpdateWithoutTaskInput, Prisma.AttendeeTaskLogUncheckedUpdateWithoutTaskInput>;
    create: Prisma.XOR<Prisma.AttendeeTaskLogCreateWithoutTaskInput, Prisma.AttendeeTaskLogUncheckedCreateWithoutTaskInput>;
};
export type AttendeeTaskLogUpdateWithWhereUniqueWithoutTaskInput = {
    where: Prisma.AttendeeTaskLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendeeTaskLogUpdateWithoutTaskInput, Prisma.AttendeeTaskLogUncheckedUpdateWithoutTaskInput>;
};
export type AttendeeTaskLogUpdateManyWithWhereWithoutTaskInput = {
    where: Prisma.AttendeeTaskLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendeeTaskLogUpdateManyMutationInput, Prisma.AttendeeTaskLogUncheckedUpdateManyWithoutTaskInput>;
};
export type AttendeeTaskLogCreateManyAttendeeInput = {
    id?: number;
    taskId: number;
    scannedBy?: string | null;
    createdAt?: Date | string;
};
export type AttendeeTaskLogUpdateWithoutAttendeeInput = {
    scannedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    task?: Prisma.TaskUpdateOneRequiredWithoutLogsNestedInput;
};
export type AttendeeTaskLogUncheckedUpdateWithoutAttendeeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    taskId?: Prisma.IntFieldUpdateOperationsInput | number;
    scannedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendeeTaskLogUncheckedUpdateManyWithoutAttendeeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    taskId?: Prisma.IntFieldUpdateOperationsInput | number;
    scannedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendeeTaskLogCreateManyTaskInput = {
    id?: number;
    attendeeId: number;
    scannedBy?: string | null;
    createdAt?: Date | string;
};
export type AttendeeTaskLogUpdateWithoutTaskInput = {
    scannedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendee?: Prisma.AttendeeUpdateOneRequiredWithoutLogsNestedInput;
};
export type AttendeeTaskLogUncheckedUpdateWithoutTaskInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    attendeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    scannedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendeeTaskLogUncheckedUpdateManyWithoutTaskInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    attendeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    scannedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendeeTaskLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attendeeId?: boolean;
    taskId?: boolean;
    scannedBy?: boolean;
    createdAt?: boolean;
    attendee?: boolean | Prisma.AttendeeDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendeeTaskLog"]>;
export type AttendeeTaskLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attendeeId?: boolean;
    taskId?: boolean;
    scannedBy?: boolean;
    createdAt?: boolean;
    attendee?: boolean | Prisma.AttendeeDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendeeTaskLog"]>;
export type AttendeeTaskLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attendeeId?: boolean;
    taskId?: boolean;
    scannedBy?: boolean;
    createdAt?: boolean;
    attendee?: boolean | Prisma.AttendeeDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendeeTaskLog"]>;
export type AttendeeTaskLogSelectScalar = {
    id?: boolean;
    attendeeId?: boolean;
    taskId?: boolean;
    scannedBy?: boolean;
    createdAt?: boolean;
};
export type AttendeeTaskLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "attendeeId" | "taskId" | "scannedBy" | "createdAt", ExtArgs["result"]["attendeeTaskLog"]>;
export type AttendeeTaskLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendee?: boolean | Prisma.AttendeeDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type AttendeeTaskLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendee?: boolean | Prisma.AttendeeDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type AttendeeTaskLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendee?: boolean | Prisma.AttendeeDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type $AttendeeTaskLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendeeTaskLog";
    objects: {
        attendee: Prisma.$AttendeePayload<ExtArgs>;
        task: Prisma.$TaskPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        attendeeId: number;
        taskId: number;
        scannedBy: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["attendeeTaskLog"]>;
    composites: {};
};
export type AttendeeTaskLogGetPayload<S extends boolean | null | undefined | AttendeeTaskLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload, S>;
export type AttendeeTaskLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendeeTaskLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendeeTaskLogCountAggregateInputType | true;
};
export interface AttendeeTaskLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendeeTaskLog'];
        meta: {
            name: 'AttendeeTaskLog';
        };
    };
    findUnique<T extends AttendeeTaskLogFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendeeTaskLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendeeTaskLogClient<runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendeeTaskLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendeeTaskLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendeeTaskLogClient<runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendeeTaskLogFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendeeTaskLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendeeTaskLogClient<runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendeeTaskLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendeeTaskLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendeeTaskLogClient<runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendeeTaskLogFindManyArgs>(args?: Prisma.SelectSubset<T, AttendeeTaskLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendeeTaskLogCreateArgs>(args: Prisma.SelectSubset<T, AttendeeTaskLogCreateArgs<ExtArgs>>): Prisma.Prisma__AttendeeTaskLogClient<runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendeeTaskLogCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendeeTaskLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendeeTaskLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendeeTaskLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendeeTaskLogDeleteArgs>(args: Prisma.SelectSubset<T, AttendeeTaskLogDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendeeTaskLogClient<runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendeeTaskLogUpdateArgs>(args: Prisma.SelectSubset<T, AttendeeTaskLogUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendeeTaskLogClient<runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendeeTaskLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendeeTaskLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendeeTaskLogUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendeeTaskLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendeeTaskLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendeeTaskLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendeeTaskLogUpsertArgs>(args: Prisma.SelectSubset<T, AttendeeTaskLogUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendeeTaskLogClient<runtime.Types.Result.GetResult<Prisma.$AttendeeTaskLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendeeTaskLogCountArgs>(args?: Prisma.Subset<T, AttendeeTaskLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendeeTaskLogCountAggregateOutputType> : number>;
    aggregate<T extends AttendeeTaskLogAggregateArgs>(args: Prisma.Subset<T, AttendeeTaskLogAggregateArgs>): Prisma.PrismaPromise<GetAttendeeTaskLogAggregateType<T>>;
    groupBy<T extends AttendeeTaskLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendeeTaskLogGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendeeTaskLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendeeTaskLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendeeTaskLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendeeTaskLogFieldRefs;
}
export interface Prisma__AttendeeTaskLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    attendee<T extends Prisma.AttendeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendeeDefaultArgs<ExtArgs>>): Prisma.Prisma__AttendeeClient<runtime.Types.Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    task<T extends Prisma.TaskDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaskDefaultArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendeeTaskLogFieldRefs {
    readonly id: Prisma.FieldRef<"AttendeeTaskLog", 'Int'>;
    readonly attendeeId: Prisma.FieldRef<"AttendeeTaskLog", 'Int'>;
    readonly taskId: Prisma.FieldRef<"AttendeeTaskLog", 'Int'>;
    readonly scannedBy: Prisma.FieldRef<"AttendeeTaskLog", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AttendeeTaskLog", 'DateTime'>;
}
export type AttendeeTaskLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeTaskLogSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeTaskLogOmit<ExtArgs> | null;
    include?: Prisma.AttendeeTaskLogInclude<ExtArgs> | null;
    where: Prisma.AttendeeTaskLogWhereUniqueInput;
};
export type AttendeeTaskLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeTaskLogSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeTaskLogOmit<ExtArgs> | null;
    include?: Prisma.AttendeeTaskLogInclude<ExtArgs> | null;
    where: Prisma.AttendeeTaskLogWhereUniqueInput;
};
export type AttendeeTaskLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendeeTaskLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendeeTaskLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendeeTaskLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeTaskLogSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeTaskLogOmit<ExtArgs> | null;
    include?: Prisma.AttendeeTaskLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendeeTaskLogCreateInput, Prisma.AttendeeTaskLogUncheckedCreateInput>;
};
export type AttendeeTaskLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendeeTaskLogCreateManyInput | Prisma.AttendeeTaskLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendeeTaskLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeTaskLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendeeTaskLogOmit<ExtArgs> | null;
    data: Prisma.AttendeeTaskLogCreateManyInput | Prisma.AttendeeTaskLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttendeeTaskLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttendeeTaskLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeTaskLogSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeTaskLogOmit<ExtArgs> | null;
    include?: Prisma.AttendeeTaskLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendeeTaskLogUpdateInput, Prisma.AttendeeTaskLogUncheckedUpdateInput>;
    where: Prisma.AttendeeTaskLogWhereUniqueInput;
};
export type AttendeeTaskLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendeeTaskLogUpdateManyMutationInput, Prisma.AttendeeTaskLogUncheckedUpdateManyInput>;
    where?: Prisma.AttendeeTaskLogWhereInput;
    limit?: number;
};
export type AttendeeTaskLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeTaskLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendeeTaskLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendeeTaskLogUpdateManyMutationInput, Prisma.AttendeeTaskLogUncheckedUpdateManyInput>;
    where?: Prisma.AttendeeTaskLogWhereInput;
    limit?: number;
    include?: Prisma.AttendeeTaskLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttendeeTaskLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeTaskLogSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeTaskLogOmit<ExtArgs> | null;
    include?: Prisma.AttendeeTaskLogInclude<ExtArgs> | null;
    where: Prisma.AttendeeTaskLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendeeTaskLogCreateInput, Prisma.AttendeeTaskLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendeeTaskLogUpdateInput, Prisma.AttendeeTaskLogUncheckedUpdateInput>;
};
export type AttendeeTaskLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeTaskLogSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeTaskLogOmit<ExtArgs> | null;
    include?: Prisma.AttendeeTaskLogInclude<ExtArgs> | null;
    where: Prisma.AttendeeTaskLogWhereUniqueInput;
};
export type AttendeeTaskLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendeeTaskLogWhereInput;
    limit?: number;
};
export type AttendeeTaskLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendeeTaskLogSelect<ExtArgs> | null;
    omit?: Prisma.AttendeeTaskLogOmit<ExtArgs> | null;
    include?: Prisma.AttendeeTaskLogInclude<ExtArgs> | null;
};
