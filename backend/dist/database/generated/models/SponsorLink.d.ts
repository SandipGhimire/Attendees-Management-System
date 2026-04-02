import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SponsorLinkModel = runtime.Types.Result.DefaultSelection<Prisma.$SponsorLinkPayload>;
export type AggregateSponsorLink = {
    _count: SponsorLinkCountAggregateOutputType | null;
    _avg: SponsorLinkAvgAggregateOutputType | null;
    _sum: SponsorLinkSumAggregateOutputType | null;
    _min: SponsorLinkMinAggregateOutputType | null;
    _max: SponsorLinkMaxAggregateOutputType | null;
};
export type SponsorLinkAvgAggregateOutputType = {
    id: number | null;
    sponsorId: number | null;
};
export type SponsorLinkSumAggregateOutputType = {
    id: number | null;
    sponsorId: number | null;
};
export type SponsorLinkMinAggregateOutputType = {
    id: number | null;
    sponsorId: number | null;
    label: string | null;
    url: string | null;
    createdAt: Date | null;
};
export type SponsorLinkMaxAggregateOutputType = {
    id: number | null;
    sponsorId: number | null;
    label: string | null;
    url: string | null;
    createdAt: Date | null;
};
export type SponsorLinkCountAggregateOutputType = {
    id: number;
    sponsorId: number;
    label: number;
    url: number;
    createdAt: number;
    _all: number;
};
export type SponsorLinkAvgAggregateInputType = {
    id?: true;
    sponsorId?: true;
};
export type SponsorLinkSumAggregateInputType = {
    id?: true;
    sponsorId?: true;
};
export type SponsorLinkMinAggregateInputType = {
    id?: true;
    sponsorId?: true;
    label?: true;
    url?: true;
    createdAt?: true;
};
export type SponsorLinkMaxAggregateInputType = {
    id?: true;
    sponsorId?: true;
    label?: true;
    url?: true;
    createdAt?: true;
};
export type SponsorLinkCountAggregateInputType = {
    id?: true;
    sponsorId?: true;
    label?: true;
    url?: true;
    createdAt?: true;
    _all?: true;
};
export type SponsorLinkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SponsorLinkWhereInput;
    orderBy?: Prisma.SponsorLinkOrderByWithRelationInput | Prisma.SponsorLinkOrderByWithRelationInput[];
    cursor?: Prisma.SponsorLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SponsorLinkCountAggregateInputType;
    _avg?: SponsorLinkAvgAggregateInputType;
    _sum?: SponsorLinkSumAggregateInputType;
    _min?: SponsorLinkMinAggregateInputType;
    _max?: SponsorLinkMaxAggregateInputType;
};
export type GetSponsorLinkAggregateType<T extends SponsorLinkAggregateArgs> = {
    [P in keyof T & keyof AggregateSponsorLink]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSponsorLink[P]> : Prisma.GetScalarType<T[P], AggregateSponsorLink[P]>;
};
export type SponsorLinkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SponsorLinkWhereInput;
    orderBy?: Prisma.SponsorLinkOrderByWithAggregationInput | Prisma.SponsorLinkOrderByWithAggregationInput[];
    by: Prisma.SponsorLinkScalarFieldEnum[] | Prisma.SponsorLinkScalarFieldEnum;
    having?: Prisma.SponsorLinkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SponsorLinkCountAggregateInputType | true;
    _avg?: SponsorLinkAvgAggregateInputType;
    _sum?: SponsorLinkSumAggregateInputType;
    _min?: SponsorLinkMinAggregateInputType;
    _max?: SponsorLinkMaxAggregateInputType;
};
export type SponsorLinkGroupByOutputType = {
    id: number;
    sponsorId: number;
    label: string;
    url: string;
    createdAt: Date;
    _count: SponsorLinkCountAggregateOutputType | null;
    _avg: SponsorLinkAvgAggregateOutputType | null;
    _sum: SponsorLinkSumAggregateOutputType | null;
    _min: SponsorLinkMinAggregateOutputType | null;
    _max: SponsorLinkMaxAggregateOutputType | null;
};
export type GetSponsorLinkGroupByPayload<T extends SponsorLinkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SponsorLinkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SponsorLinkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SponsorLinkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SponsorLinkGroupByOutputType[P]>;
}>>;
export type SponsorLinkWhereInput = {
    AND?: Prisma.SponsorLinkWhereInput | Prisma.SponsorLinkWhereInput[];
    OR?: Prisma.SponsorLinkWhereInput[];
    NOT?: Prisma.SponsorLinkWhereInput | Prisma.SponsorLinkWhereInput[];
    id?: Prisma.IntFilter<"SponsorLink"> | number;
    sponsorId?: Prisma.IntFilter<"SponsorLink"> | number;
    label?: Prisma.StringFilter<"SponsorLink"> | string;
    url?: Prisma.StringFilter<"SponsorLink"> | string;
    createdAt?: Prisma.DateTimeFilter<"SponsorLink"> | Date | string;
    sponsor?: Prisma.XOR<Prisma.SponsorScalarRelationFilter, Prisma.SponsorWhereInput>;
};
export type SponsorLinkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sponsorId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    sponsor?: Prisma.SponsorOrderByWithRelationInput;
};
export type SponsorLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SponsorLinkWhereInput | Prisma.SponsorLinkWhereInput[];
    OR?: Prisma.SponsorLinkWhereInput[];
    NOT?: Prisma.SponsorLinkWhereInput | Prisma.SponsorLinkWhereInput[];
    sponsorId?: Prisma.IntFilter<"SponsorLink"> | number;
    label?: Prisma.StringFilter<"SponsorLink"> | string;
    url?: Prisma.StringFilter<"SponsorLink"> | string;
    createdAt?: Prisma.DateTimeFilter<"SponsorLink"> | Date | string;
    sponsor?: Prisma.XOR<Prisma.SponsorScalarRelationFilter, Prisma.SponsorWhereInput>;
}, "id">;
export type SponsorLinkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sponsorId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SponsorLinkCountOrderByAggregateInput;
    _avg?: Prisma.SponsorLinkAvgOrderByAggregateInput;
    _max?: Prisma.SponsorLinkMaxOrderByAggregateInput;
    _min?: Prisma.SponsorLinkMinOrderByAggregateInput;
    _sum?: Prisma.SponsorLinkSumOrderByAggregateInput;
};
export type SponsorLinkScalarWhereWithAggregatesInput = {
    AND?: Prisma.SponsorLinkScalarWhereWithAggregatesInput | Prisma.SponsorLinkScalarWhereWithAggregatesInput[];
    OR?: Prisma.SponsorLinkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SponsorLinkScalarWhereWithAggregatesInput | Prisma.SponsorLinkScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SponsorLink"> | number;
    sponsorId?: Prisma.IntWithAggregatesFilter<"SponsorLink"> | number;
    label?: Prisma.StringWithAggregatesFilter<"SponsorLink"> | string;
    url?: Prisma.StringWithAggregatesFilter<"SponsorLink"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SponsorLink"> | Date | string;
};
export type SponsorLinkCreateInput = {
    label: string;
    url: string;
    createdAt?: Date | string;
    sponsor: Prisma.SponsorCreateNestedOneWithoutLinksInput;
};
export type SponsorLinkUncheckedCreateInput = {
    id?: number;
    sponsorId: number;
    label: string;
    url: string;
    createdAt?: Date | string;
};
export type SponsorLinkUpdateInput = {
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sponsor?: Prisma.SponsorUpdateOneRequiredWithoutLinksNestedInput;
};
export type SponsorLinkUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sponsorId?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SponsorLinkCreateManyInput = {
    id?: number;
    sponsorId: number;
    label: string;
    url: string;
    createdAt?: Date | string;
};
export type SponsorLinkUpdateManyMutationInput = {
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SponsorLinkUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sponsorId?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SponsorLinkListRelationFilter = {
    every?: Prisma.SponsorLinkWhereInput;
    some?: Prisma.SponsorLinkWhereInput;
    none?: Prisma.SponsorLinkWhereInput;
};
export type SponsorLinkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SponsorLinkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sponsorId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SponsorLinkAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sponsorId?: Prisma.SortOrder;
};
export type SponsorLinkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sponsorId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SponsorLinkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sponsorId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SponsorLinkSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sponsorId?: Prisma.SortOrder;
};
export type SponsorLinkCreateNestedManyWithoutSponsorInput = {
    create?: Prisma.XOR<Prisma.SponsorLinkCreateWithoutSponsorInput, Prisma.SponsorLinkUncheckedCreateWithoutSponsorInput> | Prisma.SponsorLinkCreateWithoutSponsorInput[] | Prisma.SponsorLinkUncheckedCreateWithoutSponsorInput[];
    connectOrCreate?: Prisma.SponsorLinkCreateOrConnectWithoutSponsorInput | Prisma.SponsorLinkCreateOrConnectWithoutSponsorInput[];
    createMany?: Prisma.SponsorLinkCreateManySponsorInputEnvelope;
    connect?: Prisma.SponsorLinkWhereUniqueInput | Prisma.SponsorLinkWhereUniqueInput[];
};
export type SponsorLinkUncheckedCreateNestedManyWithoutSponsorInput = {
    create?: Prisma.XOR<Prisma.SponsorLinkCreateWithoutSponsorInput, Prisma.SponsorLinkUncheckedCreateWithoutSponsorInput> | Prisma.SponsorLinkCreateWithoutSponsorInput[] | Prisma.SponsorLinkUncheckedCreateWithoutSponsorInput[];
    connectOrCreate?: Prisma.SponsorLinkCreateOrConnectWithoutSponsorInput | Prisma.SponsorLinkCreateOrConnectWithoutSponsorInput[];
    createMany?: Prisma.SponsorLinkCreateManySponsorInputEnvelope;
    connect?: Prisma.SponsorLinkWhereUniqueInput | Prisma.SponsorLinkWhereUniqueInput[];
};
export type SponsorLinkUpdateManyWithoutSponsorNestedInput = {
    create?: Prisma.XOR<Prisma.SponsorLinkCreateWithoutSponsorInput, Prisma.SponsorLinkUncheckedCreateWithoutSponsorInput> | Prisma.SponsorLinkCreateWithoutSponsorInput[] | Prisma.SponsorLinkUncheckedCreateWithoutSponsorInput[];
    connectOrCreate?: Prisma.SponsorLinkCreateOrConnectWithoutSponsorInput | Prisma.SponsorLinkCreateOrConnectWithoutSponsorInput[];
    upsert?: Prisma.SponsorLinkUpsertWithWhereUniqueWithoutSponsorInput | Prisma.SponsorLinkUpsertWithWhereUniqueWithoutSponsorInput[];
    createMany?: Prisma.SponsorLinkCreateManySponsorInputEnvelope;
    set?: Prisma.SponsorLinkWhereUniqueInput | Prisma.SponsorLinkWhereUniqueInput[];
    disconnect?: Prisma.SponsorLinkWhereUniqueInput | Prisma.SponsorLinkWhereUniqueInput[];
    delete?: Prisma.SponsorLinkWhereUniqueInput | Prisma.SponsorLinkWhereUniqueInput[];
    connect?: Prisma.SponsorLinkWhereUniqueInput | Prisma.SponsorLinkWhereUniqueInput[];
    update?: Prisma.SponsorLinkUpdateWithWhereUniqueWithoutSponsorInput | Prisma.SponsorLinkUpdateWithWhereUniqueWithoutSponsorInput[];
    updateMany?: Prisma.SponsorLinkUpdateManyWithWhereWithoutSponsorInput | Prisma.SponsorLinkUpdateManyWithWhereWithoutSponsorInput[];
    deleteMany?: Prisma.SponsorLinkScalarWhereInput | Prisma.SponsorLinkScalarWhereInput[];
};
export type SponsorLinkUncheckedUpdateManyWithoutSponsorNestedInput = {
    create?: Prisma.XOR<Prisma.SponsorLinkCreateWithoutSponsorInput, Prisma.SponsorLinkUncheckedCreateWithoutSponsorInput> | Prisma.SponsorLinkCreateWithoutSponsorInput[] | Prisma.SponsorLinkUncheckedCreateWithoutSponsorInput[];
    connectOrCreate?: Prisma.SponsorLinkCreateOrConnectWithoutSponsorInput | Prisma.SponsorLinkCreateOrConnectWithoutSponsorInput[];
    upsert?: Prisma.SponsorLinkUpsertWithWhereUniqueWithoutSponsorInput | Prisma.SponsorLinkUpsertWithWhereUniqueWithoutSponsorInput[];
    createMany?: Prisma.SponsorLinkCreateManySponsorInputEnvelope;
    set?: Prisma.SponsorLinkWhereUniqueInput | Prisma.SponsorLinkWhereUniqueInput[];
    disconnect?: Prisma.SponsorLinkWhereUniqueInput | Prisma.SponsorLinkWhereUniqueInput[];
    delete?: Prisma.SponsorLinkWhereUniqueInput | Prisma.SponsorLinkWhereUniqueInput[];
    connect?: Prisma.SponsorLinkWhereUniqueInput | Prisma.SponsorLinkWhereUniqueInput[];
    update?: Prisma.SponsorLinkUpdateWithWhereUniqueWithoutSponsorInput | Prisma.SponsorLinkUpdateWithWhereUniqueWithoutSponsorInput[];
    updateMany?: Prisma.SponsorLinkUpdateManyWithWhereWithoutSponsorInput | Prisma.SponsorLinkUpdateManyWithWhereWithoutSponsorInput[];
    deleteMany?: Prisma.SponsorLinkScalarWhereInput | Prisma.SponsorLinkScalarWhereInput[];
};
export type SponsorLinkCreateWithoutSponsorInput = {
    label: string;
    url: string;
    createdAt?: Date | string;
};
export type SponsorLinkUncheckedCreateWithoutSponsorInput = {
    id?: number;
    label: string;
    url: string;
    createdAt?: Date | string;
};
export type SponsorLinkCreateOrConnectWithoutSponsorInput = {
    where: Prisma.SponsorLinkWhereUniqueInput;
    create: Prisma.XOR<Prisma.SponsorLinkCreateWithoutSponsorInput, Prisma.SponsorLinkUncheckedCreateWithoutSponsorInput>;
};
export type SponsorLinkCreateManySponsorInputEnvelope = {
    data: Prisma.SponsorLinkCreateManySponsorInput | Prisma.SponsorLinkCreateManySponsorInput[];
    skipDuplicates?: boolean;
};
export type SponsorLinkUpsertWithWhereUniqueWithoutSponsorInput = {
    where: Prisma.SponsorLinkWhereUniqueInput;
    update: Prisma.XOR<Prisma.SponsorLinkUpdateWithoutSponsorInput, Prisma.SponsorLinkUncheckedUpdateWithoutSponsorInput>;
    create: Prisma.XOR<Prisma.SponsorLinkCreateWithoutSponsorInput, Prisma.SponsorLinkUncheckedCreateWithoutSponsorInput>;
};
export type SponsorLinkUpdateWithWhereUniqueWithoutSponsorInput = {
    where: Prisma.SponsorLinkWhereUniqueInput;
    data: Prisma.XOR<Prisma.SponsorLinkUpdateWithoutSponsorInput, Prisma.SponsorLinkUncheckedUpdateWithoutSponsorInput>;
};
export type SponsorLinkUpdateManyWithWhereWithoutSponsorInput = {
    where: Prisma.SponsorLinkScalarWhereInput;
    data: Prisma.XOR<Prisma.SponsorLinkUpdateManyMutationInput, Prisma.SponsorLinkUncheckedUpdateManyWithoutSponsorInput>;
};
export type SponsorLinkScalarWhereInput = {
    AND?: Prisma.SponsorLinkScalarWhereInput | Prisma.SponsorLinkScalarWhereInput[];
    OR?: Prisma.SponsorLinkScalarWhereInput[];
    NOT?: Prisma.SponsorLinkScalarWhereInput | Prisma.SponsorLinkScalarWhereInput[];
    id?: Prisma.IntFilter<"SponsorLink"> | number;
    sponsorId?: Prisma.IntFilter<"SponsorLink"> | number;
    label?: Prisma.StringFilter<"SponsorLink"> | string;
    url?: Prisma.StringFilter<"SponsorLink"> | string;
    createdAt?: Prisma.DateTimeFilter<"SponsorLink"> | Date | string;
};
export type SponsorLinkCreateManySponsorInput = {
    id?: number;
    label: string;
    url: string;
    createdAt?: Date | string;
};
export type SponsorLinkUpdateWithoutSponsorInput = {
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SponsorLinkUncheckedUpdateWithoutSponsorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SponsorLinkUncheckedUpdateManyWithoutSponsorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SponsorLinkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sponsorId?: boolean;
    label?: boolean;
    url?: boolean;
    createdAt?: boolean;
    sponsor?: boolean | Prisma.SponsorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sponsorLink"]>;
export type SponsorLinkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sponsorId?: boolean;
    label?: boolean;
    url?: boolean;
    createdAt?: boolean;
    sponsor?: boolean | Prisma.SponsorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sponsorLink"]>;
export type SponsorLinkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sponsorId?: boolean;
    label?: boolean;
    url?: boolean;
    createdAt?: boolean;
    sponsor?: boolean | Prisma.SponsorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sponsorLink"]>;
export type SponsorLinkSelectScalar = {
    id?: boolean;
    sponsorId?: boolean;
    label?: boolean;
    url?: boolean;
    createdAt?: boolean;
};
export type SponsorLinkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sponsorId" | "label" | "url" | "createdAt", ExtArgs["result"]["sponsorLink"]>;
export type SponsorLinkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sponsor?: boolean | Prisma.SponsorDefaultArgs<ExtArgs>;
};
export type SponsorLinkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sponsor?: boolean | Prisma.SponsorDefaultArgs<ExtArgs>;
};
export type SponsorLinkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sponsor?: boolean | Prisma.SponsorDefaultArgs<ExtArgs>;
};
export type $SponsorLinkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SponsorLink";
    objects: {
        sponsor: Prisma.$SponsorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        sponsorId: number;
        label: string;
        url: string;
        createdAt: Date;
    }, ExtArgs["result"]["sponsorLink"]>;
    composites: {};
};
export type SponsorLinkGetPayload<S extends boolean | null | undefined | SponsorLinkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload, S>;
export type SponsorLinkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SponsorLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SponsorLinkCountAggregateInputType | true;
};
export interface SponsorLinkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SponsorLink'];
        meta: {
            name: 'SponsorLink';
        };
    };
    findUnique<T extends SponsorLinkFindUniqueArgs>(args: Prisma.SelectSubset<T, SponsorLinkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SponsorLinkClient<runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SponsorLinkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SponsorLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SponsorLinkClient<runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SponsorLinkFindFirstArgs>(args?: Prisma.SelectSubset<T, SponsorLinkFindFirstArgs<ExtArgs>>): Prisma.Prisma__SponsorLinkClient<runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SponsorLinkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SponsorLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SponsorLinkClient<runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SponsorLinkFindManyArgs>(args?: Prisma.SelectSubset<T, SponsorLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SponsorLinkCreateArgs>(args: Prisma.SelectSubset<T, SponsorLinkCreateArgs<ExtArgs>>): Prisma.Prisma__SponsorLinkClient<runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SponsorLinkCreateManyArgs>(args?: Prisma.SelectSubset<T, SponsorLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SponsorLinkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SponsorLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SponsorLinkDeleteArgs>(args: Prisma.SelectSubset<T, SponsorLinkDeleteArgs<ExtArgs>>): Prisma.Prisma__SponsorLinkClient<runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SponsorLinkUpdateArgs>(args: Prisma.SelectSubset<T, SponsorLinkUpdateArgs<ExtArgs>>): Prisma.Prisma__SponsorLinkClient<runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SponsorLinkDeleteManyArgs>(args?: Prisma.SelectSubset<T, SponsorLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SponsorLinkUpdateManyArgs>(args: Prisma.SelectSubset<T, SponsorLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SponsorLinkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SponsorLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SponsorLinkUpsertArgs>(args: Prisma.SelectSubset<T, SponsorLinkUpsertArgs<ExtArgs>>): Prisma.Prisma__SponsorLinkClient<runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SponsorLinkCountArgs>(args?: Prisma.Subset<T, SponsorLinkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SponsorLinkCountAggregateOutputType> : number>;
    aggregate<T extends SponsorLinkAggregateArgs>(args: Prisma.Subset<T, SponsorLinkAggregateArgs>): Prisma.PrismaPromise<GetSponsorLinkAggregateType<T>>;
    groupBy<T extends SponsorLinkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SponsorLinkGroupByArgs['orderBy'];
    } : {
        orderBy?: SponsorLinkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SponsorLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSponsorLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SponsorLinkFieldRefs;
}
export interface Prisma__SponsorLinkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sponsor<T extends Prisma.SponsorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SponsorDefaultArgs<ExtArgs>>): Prisma.Prisma__SponsorClient<runtime.Types.Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SponsorLinkFieldRefs {
    readonly id: Prisma.FieldRef<"SponsorLink", 'Int'>;
    readonly sponsorId: Prisma.FieldRef<"SponsorLink", 'Int'>;
    readonly label: Prisma.FieldRef<"SponsorLink", 'String'>;
    readonly url: Prisma.FieldRef<"SponsorLink", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SponsorLink", 'DateTime'>;
}
export type SponsorLinkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorLinkSelect<ExtArgs> | null;
    omit?: Prisma.SponsorLinkOmit<ExtArgs> | null;
    include?: Prisma.SponsorLinkInclude<ExtArgs> | null;
    where: Prisma.SponsorLinkWhereUniqueInput;
};
export type SponsorLinkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorLinkSelect<ExtArgs> | null;
    omit?: Prisma.SponsorLinkOmit<ExtArgs> | null;
    include?: Prisma.SponsorLinkInclude<ExtArgs> | null;
    where: Prisma.SponsorLinkWhereUniqueInput;
};
export type SponsorLinkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorLinkSelect<ExtArgs> | null;
    omit?: Prisma.SponsorLinkOmit<ExtArgs> | null;
    include?: Prisma.SponsorLinkInclude<ExtArgs> | null;
    where?: Prisma.SponsorLinkWhereInput;
    orderBy?: Prisma.SponsorLinkOrderByWithRelationInput | Prisma.SponsorLinkOrderByWithRelationInput[];
    cursor?: Prisma.SponsorLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SponsorLinkScalarFieldEnum | Prisma.SponsorLinkScalarFieldEnum[];
};
export type SponsorLinkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorLinkSelect<ExtArgs> | null;
    omit?: Prisma.SponsorLinkOmit<ExtArgs> | null;
    include?: Prisma.SponsorLinkInclude<ExtArgs> | null;
    where?: Prisma.SponsorLinkWhereInput;
    orderBy?: Prisma.SponsorLinkOrderByWithRelationInput | Prisma.SponsorLinkOrderByWithRelationInput[];
    cursor?: Prisma.SponsorLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SponsorLinkScalarFieldEnum | Prisma.SponsorLinkScalarFieldEnum[];
};
export type SponsorLinkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorLinkSelect<ExtArgs> | null;
    omit?: Prisma.SponsorLinkOmit<ExtArgs> | null;
    include?: Prisma.SponsorLinkInclude<ExtArgs> | null;
    where?: Prisma.SponsorLinkWhereInput;
    orderBy?: Prisma.SponsorLinkOrderByWithRelationInput | Prisma.SponsorLinkOrderByWithRelationInput[];
    cursor?: Prisma.SponsorLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SponsorLinkScalarFieldEnum | Prisma.SponsorLinkScalarFieldEnum[];
};
export type SponsorLinkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorLinkSelect<ExtArgs> | null;
    omit?: Prisma.SponsorLinkOmit<ExtArgs> | null;
    include?: Prisma.SponsorLinkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SponsorLinkCreateInput, Prisma.SponsorLinkUncheckedCreateInput>;
};
export type SponsorLinkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SponsorLinkCreateManyInput | Prisma.SponsorLinkCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SponsorLinkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorLinkSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SponsorLinkOmit<ExtArgs> | null;
    data: Prisma.SponsorLinkCreateManyInput | Prisma.SponsorLinkCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SponsorLinkIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SponsorLinkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorLinkSelect<ExtArgs> | null;
    omit?: Prisma.SponsorLinkOmit<ExtArgs> | null;
    include?: Prisma.SponsorLinkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SponsorLinkUpdateInput, Prisma.SponsorLinkUncheckedUpdateInput>;
    where: Prisma.SponsorLinkWhereUniqueInput;
};
export type SponsorLinkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SponsorLinkUpdateManyMutationInput, Prisma.SponsorLinkUncheckedUpdateManyInput>;
    where?: Prisma.SponsorLinkWhereInput;
    limit?: number;
};
export type SponsorLinkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorLinkSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SponsorLinkOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SponsorLinkUpdateManyMutationInput, Prisma.SponsorLinkUncheckedUpdateManyInput>;
    where?: Prisma.SponsorLinkWhereInput;
    limit?: number;
    include?: Prisma.SponsorLinkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SponsorLinkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorLinkSelect<ExtArgs> | null;
    omit?: Prisma.SponsorLinkOmit<ExtArgs> | null;
    include?: Prisma.SponsorLinkInclude<ExtArgs> | null;
    where: Prisma.SponsorLinkWhereUniqueInput;
    create: Prisma.XOR<Prisma.SponsorLinkCreateInput, Prisma.SponsorLinkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SponsorLinkUpdateInput, Prisma.SponsorLinkUncheckedUpdateInput>;
};
export type SponsorLinkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorLinkSelect<ExtArgs> | null;
    omit?: Prisma.SponsorLinkOmit<ExtArgs> | null;
    include?: Prisma.SponsorLinkInclude<ExtArgs> | null;
    where: Prisma.SponsorLinkWhereUniqueInput;
};
export type SponsorLinkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SponsorLinkWhereInput;
    limit?: number;
};
export type SponsorLinkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorLinkSelect<ExtArgs> | null;
    omit?: Prisma.SponsorLinkOmit<ExtArgs> | null;
    include?: Prisma.SponsorLinkInclude<ExtArgs> | null;
};
