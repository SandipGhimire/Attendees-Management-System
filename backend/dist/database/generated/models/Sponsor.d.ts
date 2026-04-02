import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SponsorModel = runtime.Types.Result.DefaultSelection<Prisma.$SponsorPayload>;
export type AggregateSponsor = {
    _count: SponsorCountAggregateOutputType | null;
    _avg: SponsorAvgAggregateOutputType | null;
    _sum: SponsorSumAggregateOutputType | null;
    _min: SponsorMinAggregateOutputType | null;
    _max: SponsorMaxAggregateOutputType | null;
};
export type SponsorAvgAggregateOutputType = {
    id: number | null;
    order: number | null;
};
export type SponsorSumAggregateOutputType = {
    id: number | null;
    order: number | null;
};
export type SponsorMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    phoneNumber: string | null;
    logo: string | null;
    description: string | null;
    contribution: string | null;
    isActive: boolean | null;
    order: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SponsorMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    phoneNumber: string | null;
    logo: string | null;
    description: string | null;
    contribution: string | null;
    isActive: boolean | null;
    order: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SponsorCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    phoneNumber: number;
    logo: number;
    description: number;
    contribution: number;
    isActive: number;
    order: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SponsorAvgAggregateInputType = {
    id?: true;
    order?: true;
};
export type SponsorSumAggregateInputType = {
    id?: true;
    order?: true;
};
export type SponsorMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phoneNumber?: true;
    logo?: true;
    description?: true;
    contribution?: true;
    isActive?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SponsorMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phoneNumber?: true;
    logo?: true;
    description?: true;
    contribution?: true;
    isActive?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SponsorCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phoneNumber?: true;
    logo?: true;
    description?: true;
    contribution?: true;
    isActive?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SponsorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SponsorWhereInput;
    orderBy?: Prisma.SponsorOrderByWithRelationInput | Prisma.SponsorOrderByWithRelationInput[];
    cursor?: Prisma.SponsorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SponsorCountAggregateInputType;
    _avg?: SponsorAvgAggregateInputType;
    _sum?: SponsorSumAggregateInputType;
    _min?: SponsorMinAggregateInputType;
    _max?: SponsorMaxAggregateInputType;
};
export type GetSponsorAggregateType<T extends SponsorAggregateArgs> = {
    [P in keyof T & keyof AggregateSponsor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSponsor[P]> : Prisma.GetScalarType<T[P], AggregateSponsor[P]>;
};
export type SponsorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SponsorWhereInput;
    orderBy?: Prisma.SponsorOrderByWithAggregationInput | Prisma.SponsorOrderByWithAggregationInput[];
    by: Prisma.SponsorScalarFieldEnum[] | Prisma.SponsorScalarFieldEnum;
    having?: Prisma.SponsorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SponsorCountAggregateInputType | true;
    _avg?: SponsorAvgAggregateInputType;
    _sum?: SponsorSumAggregateInputType;
    _min?: SponsorMinAggregateInputType;
    _max?: SponsorMaxAggregateInputType;
};
export type SponsorGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    logo: string;
    description: string | null;
    contribution: string | null;
    isActive: boolean;
    order: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SponsorCountAggregateOutputType | null;
    _avg: SponsorAvgAggregateOutputType | null;
    _sum: SponsorSumAggregateOutputType | null;
    _min: SponsorMinAggregateOutputType | null;
    _max: SponsorMaxAggregateOutputType | null;
};
export type GetSponsorGroupByPayload<T extends SponsorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SponsorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SponsorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SponsorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SponsorGroupByOutputType[P]>;
}>>;
export type SponsorWhereInput = {
    AND?: Prisma.SponsorWhereInput | Prisma.SponsorWhereInput[];
    OR?: Prisma.SponsorWhereInput[];
    NOT?: Prisma.SponsorWhereInput | Prisma.SponsorWhereInput[];
    id?: Prisma.IntFilter<"Sponsor"> | number;
    name?: Prisma.StringFilter<"Sponsor"> | string;
    email?: Prisma.StringFilter<"Sponsor"> | string;
    phoneNumber?: Prisma.StringFilter<"Sponsor"> | string;
    logo?: Prisma.StringFilter<"Sponsor"> | string;
    description?: Prisma.StringNullableFilter<"Sponsor"> | string | null;
    contribution?: Prisma.StringNullableFilter<"Sponsor"> | string | null;
    isActive?: Prisma.BoolFilter<"Sponsor"> | boolean;
    order?: Prisma.IntNullableFilter<"Sponsor"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Sponsor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sponsor"> | Date | string;
    links?: Prisma.SponsorLinkListRelationFilter;
};
export type SponsorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    contribution?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    order?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    links?: Prisma.SponsorLinkOrderByRelationAggregateInput;
};
export type SponsorWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    email?: string;
    phoneNumber?: string;
    AND?: Prisma.SponsorWhereInput | Prisma.SponsorWhereInput[];
    OR?: Prisma.SponsorWhereInput[];
    NOT?: Prisma.SponsorWhereInput | Prisma.SponsorWhereInput[];
    logo?: Prisma.StringFilter<"Sponsor"> | string;
    description?: Prisma.StringNullableFilter<"Sponsor"> | string | null;
    contribution?: Prisma.StringNullableFilter<"Sponsor"> | string | null;
    isActive?: Prisma.BoolFilter<"Sponsor"> | boolean;
    order?: Prisma.IntNullableFilter<"Sponsor"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Sponsor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sponsor"> | Date | string;
    links?: Prisma.SponsorLinkListRelationFilter;
}, "id" | "name" | "email" | "phoneNumber">;
export type SponsorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    contribution?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    order?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SponsorCountOrderByAggregateInput;
    _avg?: Prisma.SponsorAvgOrderByAggregateInput;
    _max?: Prisma.SponsorMaxOrderByAggregateInput;
    _min?: Prisma.SponsorMinOrderByAggregateInput;
    _sum?: Prisma.SponsorSumOrderByAggregateInput;
};
export type SponsorScalarWhereWithAggregatesInput = {
    AND?: Prisma.SponsorScalarWhereWithAggregatesInput | Prisma.SponsorScalarWhereWithAggregatesInput[];
    OR?: Prisma.SponsorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SponsorScalarWhereWithAggregatesInput | Prisma.SponsorScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Sponsor"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Sponsor"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Sponsor"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"Sponsor"> | string;
    logo?: Prisma.StringWithAggregatesFilter<"Sponsor"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Sponsor"> | string | null;
    contribution?: Prisma.StringNullableWithAggregatesFilter<"Sponsor"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Sponsor"> | boolean;
    order?: Prisma.IntNullableWithAggregatesFilter<"Sponsor"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Sponsor"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Sponsor"> | Date | string;
};
export type SponsorCreateInput = {
    name: string;
    email: string;
    phoneNumber: string;
    logo: string;
    description?: string | null;
    contribution?: string | null;
    isActive?: boolean;
    order?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    links?: Prisma.SponsorLinkCreateNestedManyWithoutSponsorInput;
};
export type SponsorUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    logo: string;
    description?: string | null;
    contribution?: string | null;
    isActive?: boolean;
    order?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    links?: Prisma.SponsorLinkUncheckedCreateNestedManyWithoutSponsorInput;
};
export type SponsorUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contribution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    links?: Prisma.SponsorLinkUpdateManyWithoutSponsorNestedInput;
};
export type SponsorUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contribution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    links?: Prisma.SponsorLinkUncheckedUpdateManyWithoutSponsorNestedInput;
};
export type SponsorCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    logo: string;
    description?: string | null;
    contribution?: string | null;
    isActive?: boolean;
    order?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SponsorUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contribution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SponsorUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contribution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SponsorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    contribution?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SponsorAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type SponsorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    contribution?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SponsorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    contribution?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SponsorSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type SponsorScalarRelationFilter = {
    is?: Prisma.SponsorWhereInput;
    isNot?: Prisma.SponsorWhereInput;
};
export type SponsorCreateNestedOneWithoutLinksInput = {
    create?: Prisma.XOR<Prisma.SponsorCreateWithoutLinksInput, Prisma.SponsorUncheckedCreateWithoutLinksInput>;
    connectOrCreate?: Prisma.SponsorCreateOrConnectWithoutLinksInput;
    connect?: Prisma.SponsorWhereUniqueInput;
};
export type SponsorUpdateOneRequiredWithoutLinksNestedInput = {
    create?: Prisma.XOR<Prisma.SponsorCreateWithoutLinksInput, Prisma.SponsorUncheckedCreateWithoutLinksInput>;
    connectOrCreate?: Prisma.SponsorCreateOrConnectWithoutLinksInput;
    upsert?: Prisma.SponsorUpsertWithoutLinksInput;
    connect?: Prisma.SponsorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SponsorUpdateToOneWithWhereWithoutLinksInput, Prisma.SponsorUpdateWithoutLinksInput>, Prisma.SponsorUncheckedUpdateWithoutLinksInput>;
};
export type SponsorCreateWithoutLinksInput = {
    name: string;
    email: string;
    phoneNumber: string;
    logo: string;
    description?: string | null;
    contribution?: string | null;
    isActive?: boolean;
    order?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SponsorUncheckedCreateWithoutLinksInput = {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    logo: string;
    description?: string | null;
    contribution?: string | null;
    isActive?: boolean;
    order?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SponsorCreateOrConnectWithoutLinksInput = {
    where: Prisma.SponsorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SponsorCreateWithoutLinksInput, Prisma.SponsorUncheckedCreateWithoutLinksInput>;
};
export type SponsorUpsertWithoutLinksInput = {
    update: Prisma.XOR<Prisma.SponsorUpdateWithoutLinksInput, Prisma.SponsorUncheckedUpdateWithoutLinksInput>;
    create: Prisma.XOR<Prisma.SponsorCreateWithoutLinksInput, Prisma.SponsorUncheckedCreateWithoutLinksInput>;
    where?: Prisma.SponsorWhereInput;
};
export type SponsorUpdateToOneWithWhereWithoutLinksInput = {
    where?: Prisma.SponsorWhereInput;
    data: Prisma.XOR<Prisma.SponsorUpdateWithoutLinksInput, Prisma.SponsorUncheckedUpdateWithoutLinksInput>;
};
export type SponsorUpdateWithoutLinksInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contribution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SponsorUncheckedUpdateWithoutLinksInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contribution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SponsorCountOutputType = {
    links: number;
};
export type SponsorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    links?: boolean | SponsorCountOutputTypeCountLinksArgs;
};
export type SponsorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorCountOutputTypeSelect<ExtArgs> | null;
};
export type SponsorCountOutputTypeCountLinksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SponsorLinkWhereInput;
};
export type SponsorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    logo?: boolean;
    description?: boolean;
    contribution?: boolean;
    isActive?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    links?: boolean | Prisma.Sponsor$linksArgs<ExtArgs>;
    _count?: boolean | Prisma.SponsorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sponsor"]>;
export type SponsorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    logo?: boolean;
    description?: boolean;
    contribution?: boolean;
    isActive?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["sponsor"]>;
export type SponsorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    logo?: boolean;
    description?: boolean;
    contribution?: boolean;
    isActive?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["sponsor"]>;
export type SponsorSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    logo?: boolean;
    description?: boolean;
    contribution?: boolean;
    isActive?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SponsorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "phoneNumber" | "logo" | "description" | "contribution" | "isActive" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["sponsor"]>;
export type SponsorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    links?: boolean | Prisma.Sponsor$linksArgs<ExtArgs>;
    _count?: boolean | Prisma.SponsorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SponsorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SponsorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SponsorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Sponsor";
    objects: {
        links: Prisma.$SponsorLinkPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        email: string;
        phoneNumber: string;
        logo: string;
        description: string | null;
        contribution: string | null;
        isActive: boolean;
        order: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["sponsor"]>;
    composites: {};
};
export type SponsorGetPayload<S extends boolean | null | undefined | SponsorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SponsorPayload, S>;
export type SponsorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SponsorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SponsorCountAggregateInputType | true;
};
export interface SponsorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Sponsor'];
        meta: {
            name: 'Sponsor';
        };
    };
    findUnique<T extends SponsorFindUniqueArgs>(args: Prisma.SelectSubset<T, SponsorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SponsorClient<runtime.Types.Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SponsorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SponsorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SponsorClient<runtime.Types.Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SponsorFindFirstArgs>(args?: Prisma.SelectSubset<T, SponsorFindFirstArgs<ExtArgs>>): Prisma.Prisma__SponsorClient<runtime.Types.Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SponsorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SponsorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SponsorClient<runtime.Types.Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SponsorFindManyArgs>(args?: Prisma.SelectSubset<T, SponsorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SponsorCreateArgs>(args: Prisma.SelectSubset<T, SponsorCreateArgs<ExtArgs>>): Prisma.Prisma__SponsorClient<runtime.Types.Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SponsorCreateManyArgs>(args?: Prisma.SelectSubset<T, SponsorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SponsorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SponsorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SponsorDeleteArgs>(args: Prisma.SelectSubset<T, SponsorDeleteArgs<ExtArgs>>): Prisma.Prisma__SponsorClient<runtime.Types.Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SponsorUpdateArgs>(args: Prisma.SelectSubset<T, SponsorUpdateArgs<ExtArgs>>): Prisma.Prisma__SponsorClient<runtime.Types.Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SponsorDeleteManyArgs>(args?: Prisma.SelectSubset<T, SponsorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SponsorUpdateManyArgs>(args: Prisma.SelectSubset<T, SponsorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SponsorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SponsorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SponsorUpsertArgs>(args: Prisma.SelectSubset<T, SponsorUpsertArgs<ExtArgs>>): Prisma.Prisma__SponsorClient<runtime.Types.Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SponsorCountArgs>(args?: Prisma.Subset<T, SponsorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SponsorCountAggregateOutputType> : number>;
    aggregate<T extends SponsorAggregateArgs>(args: Prisma.Subset<T, SponsorAggregateArgs>): Prisma.PrismaPromise<GetSponsorAggregateType<T>>;
    groupBy<T extends SponsorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SponsorGroupByArgs['orderBy'];
    } : {
        orderBy?: SponsorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SponsorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSponsorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SponsorFieldRefs;
}
export interface Prisma__SponsorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    links<T extends Prisma.Sponsor$linksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sponsor$linksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SponsorLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SponsorFieldRefs {
    readonly id: Prisma.FieldRef<"Sponsor", 'Int'>;
    readonly name: Prisma.FieldRef<"Sponsor", 'String'>;
    readonly email: Prisma.FieldRef<"Sponsor", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"Sponsor", 'String'>;
    readonly logo: Prisma.FieldRef<"Sponsor", 'String'>;
    readonly description: Prisma.FieldRef<"Sponsor", 'String'>;
    readonly contribution: Prisma.FieldRef<"Sponsor", 'String'>;
    readonly isActive: Prisma.FieldRef<"Sponsor", 'Boolean'>;
    readonly order: Prisma.FieldRef<"Sponsor", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Sponsor", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Sponsor", 'DateTime'>;
}
export type SponsorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorSelect<ExtArgs> | null;
    omit?: Prisma.SponsorOmit<ExtArgs> | null;
    include?: Prisma.SponsorInclude<ExtArgs> | null;
    where: Prisma.SponsorWhereUniqueInput;
};
export type SponsorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorSelect<ExtArgs> | null;
    omit?: Prisma.SponsorOmit<ExtArgs> | null;
    include?: Prisma.SponsorInclude<ExtArgs> | null;
    where: Prisma.SponsorWhereUniqueInput;
};
export type SponsorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorSelect<ExtArgs> | null;
    omit?: Prisma.SponsorOmit<ExtArgs> | null;
    include?: Prisma.SponsorInclude<ExtArgs> | null;
    where?: Prisma.SponsorWhereInput;
    orderBy?: Prisma.SponsorOrderByWithRelationInput | Prisma.SponsorOrderByWithRelationInput[];
    cursor?: Prisma.SponsorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SponsorScalarFieldEnum | Prisma.SponsorScalarFieldEnum[];
};
export type SponsorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorSelect<ExtArgs> | null;
    omit?: Prisma.SponsorOmit<ExtArgs> | null;
    include?: Prisma.SponsorInclude<ExtArgs> | null;
    where?: Prisma.SponsorWhereInput;
    orderBy?: Prisma.SponsorOrderByWithRelationInput | Prisma.SponsorOrderByWithRelationInput[];
    cursor?: Prisma.SponsorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SponsorScalarFieldEnum | Prisma.SponsorScalarFieldEnum[];
};
export type SponsorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorSelect<ExtArgs> | null;
    omit?: Prisma.SponsorOmit<ExtArgs> | null;
    include?: Prisma.SponsorInclude<ExtArgs> | null;
    where?: Prisma.SponsorWhereInput;
    orderBy?: Prisma.SponsorOrderByWithRelationInput | Prisma.SponsorOrderByWithRelationInput[];
    cursor?: Prisma.SponsorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SponsorScalarFieldEnum | Prisma.SponsorScalarFieldEnum[];
};
export type SponsorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorSelect<ExtArgs> | null;
    omit?: Prisma.SponsorOmit<ExtArgs> | null;
    include?: Prisma.SponsorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SponsorCreateInput, Prisma.SponsorUncheckedCreateInput>;
};
export type SponsorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SponsorCreateManyInput | Prisma.SponsorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SponsorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SponsorOmit<ExtArgs> | null;
    data: Prisma.SponsorCreateManyInput | Prisma.SponsorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SponsorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorSelect<ExtArgs> | null;
    omit?: Prisma.SponsorOmit<ExtArgs> | null;
    include?: Prisma.SponsorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SponsorUpdateInput, Prisma.SponsorUncheckedUpdateInput>;
    where: Prisma.SponsorWhereUniqueInput;
};
export type SponsorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SponsorUpdateManyMutationInput, Prisma.SponsorUncheckedUpdateManyInput>;
    where?: Prisma.SponsorWhereInput;
    limit?: number;
};
export type SponsorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SponsorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SponsorUpdateManyMutationInput, Prisma.SponsorUncheckedUpdateManyInput>;
    where?: Prisma.SponsorWhereInput;
    limit?: number;
};
export type SponsorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorSelect<ExtArgs> | null;
    omit?: Prisma.SponsorOmit<ExtArgs> | null;
    include?: Prisma.SponsorInclude<ExtArgs> | null;
    where: Prisma.SponsorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SponsorCreateInput, Prisma.SponsorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SponsorUpdateInput, Prisma.SponsorUncheckedUpdateInput>;
};
export type SponsorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorSelect<ExtArgs> | null;
    omit?: Prisma.SponsorOmit<ExtArgs> | null;
    include?: Prisma.SponsorInclude<ExtArgs> | null;
    where: Prisma.SponsorWhereUniqueInput;
};
export type SponsorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SponsorWhereInput;
    limit?: number;
};
export type Sponsor$linksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SponsorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SponsorSelect<ExtArgs> | null;
    omit?: Prisma.SponsorOmit<ExtArgs> | null;
    include?: Prisma.SponsorInclude<ExtArgs> | null;
};
