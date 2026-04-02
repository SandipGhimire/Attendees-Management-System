import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SystemLogModel = runtime.Types.Result.DefaultSelection<Prisma.$SystemLogPayload>;
export type AggregateSystemLog = {
    _count: SystemLogCountAggregateOutputType | null;
    _min: SystemLogMinAggregateOutputType | null;
    _max: SystemLogMaxAggregateOutputType | null;
};
export type SystemLogMinAggregateOutputType = {
    id: string | null;
    type: $Enums.LogType | null;
    action: $Enums.ActionType | null;
    userId: string | null;
    level: $Enums.LogLevel | null;
    message: string | null;
    createdAt: Date | null;
};
export type SystemLogMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.LogType | null;
    action: $Enums.ActionType | null;
    userId: string | null;
    level: $Enums.LogLevel | null;
    message: string | null;
    createdAt: Date | null;
};
export type SystemLogCountAggregateOutputType = {
    id: number;
    type: number;
    action: number;
    userId: number;
    level: number;
    message: number;
    metadata: number;
    createdAt: number;
    _all: number;
};
export type SystemLogMinAggregateInputType = {
    id?: true;
    type?: true;
    action?: true;
    userId?: true;
    level?: true;
    message?: true;
    createdAt?: true;
};
export type SystemLogMaxAggregateInputType = {
    id?: true;
    type?: true;
    action?: true;
    userId?: true;
    level?: true;
    message?: true;
    createdAt?: true;
};
export type SystemLogCountAggregateInputType = {
    id?: true;
    type?: true;
    action?: true;
    userId?: true;
    level?: true;
    message?: true;
    metadata?: true;
    createdAt?: true;
    _all?: true;
};
export type SystemLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SystemLogWhereInput;
    orderBy?: Prisma.SystemLogOrderByWithRelationInput | Prisma.SystemLogOrderByWithRelationInput[];
    cursor?: Prisma.SystemLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SystemLogCountAggregateInputType;
    _min?: SystemLogMinAggregateInputType;
    _max?: SystemLogMaxAggregateInputType;
};
export type GetSystemLogAggregateType<T extends SystemLogAggregateArgs> = {
    [P in keyof T & keyof AggregateSystemLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSystemLog[P]> : Prisma.GetScalarType<T[P], AggregateSystemLog[P]>;
};
export type SystemLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SystemLogWhereInput;
    orderBy?: Prisma.SystemLogOrderByWithAggregationInput | Prisma.SystemLogOrderByWithAggregationInput[];
    by: Prisma.SystemLogScalarFieldEnum[] | Prisma.SystemLogScalarFieldEnum;
    having?: Prisma.SystemLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SystemLogCountAggregateInputType | true;
    _min?: SystemLogMinAggregateInputType;
    _max?: SystemLogMaxAggregateInputType;
};
export type SystemLogGroupByOutputType = {
    id: string;
    type: $Enums.LogType;
    action: $Enums.ActionType | null;
    userId: string | null;
    level: $Enums.LogLevel | null;
    message: string;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    _count: SystemLogCountAggregateOutputType | null;
    _min: SystemLogMinAggregateOutputType | null;
    _max: SystemLogMaxAggregateOutputType | null;
};
export type GetSystemLogGroupByPayload<T extends SystemLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SystemLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SystemLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SystemLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SystemLogGroupByOutputType[P]>;
}>>;
export type SystemLogWhereInput = {
    AND?: Prisma.SystemLogWhereInput | Prisma.SystemLogWhereInput[];
    OR?: Prisma.SystemLogWhereInput[];
    NOT?: Prisma.SystemLogWhereInput | Prisma.SystemLogWhereInput[];
    id?: Prisma.StringFilter<"SystemLog"> | string;
    type?: Prisma.EnumLogTypeFilter<"SystemLog"> | $Enums.LogType;
    action?: Prisma.EnumActionTypeNullableFilter<"SystemLog"> | $Enums.ActionType | null;
    userId?: Prisma.StringNullableFilter<"SystemLog"> | string | null;
    level?: Prisma.EnumLogLevelNullableFilter<"SystemLog"> | $Enums.LogLevel | null;
    message?: Prisma.StringFilter<"SystemLog"> | string;
    metadata?: Prisma.JsonNullableFilter<"SystemLog">;
    createdAt?: Prisma.DateTimeFilter<"SystemLog"> | Date | string;
};
export type SystemLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    action?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    level?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SystemLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SystemLogWhereInput | Prisma.SystemLogWhereInput[];
    OR?: Prisma.SystemLogWhereInput[];
    NOT?: Prisma.SystemLogWhereInput | Prisma.SystemLogWhereInput[];
    type?: Prisma.EnumLogTypeFilter<"SystemLog"> | $Enums.LogType;
    action?: Prisma.EnumActionTypeNullableFilter<"SystemLog"> | $Enums.ActionType | null;
    userId?: Prisma.StringNullableFilter<"SystemLog"> | string | null;
    level?: Prisma.EnumLogLevelNullableFilter<"SystemLog"> | $Enums.LogLevel | null;
    message?: Prisma.StringFilter<"SystemLog"> | string;
    metadata?: Prisma.JsonNullableFilter<"SystemLog">;
    createdAt?: Prisma.DateTimeFilter<"SystemLog"> | Date | string;
}, "id">;
export type SystemLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    action?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    level?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SystemLogCountOrderByAggregateInput;
    _max?: Prisma.SystemLogMaxOrderByAggregateInput;
    _min?: Prisma.SystemLogMinOrderByAggregateInput;
};
export type SystemLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.SystemLogScalarWhereWithAggregatesInput | Prisma.SystemLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.SystemLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SystemLogScalarWhereWithAggregatesInput | Prisma.SystemLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SystemLog"> | string;
    type?: Prisma.EnumLogTypeWithAggregatesFilter<"SystemLog"> | $Enums.LogType;
    action?: Prisma.EnumActionTypeNullableWithAggregatesFilter<"SystemLog"> | $Enums.ActionType | null;
    userId?: Prisma.StringNullableWithAggregatesFilter<"SystemLog"> | string | null;
    level?: Prisma.EnumLogLevelNullableWithAggregatesFilter<"SystemLog"> | $Enums.LogLevel | null;
    message?: Prisma.StringWithAggregatesFilter<"SystemLog"> | string;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"SystemLog">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SystemLog"> | Date | string;
};
export type SystemLogCreateInput = {
    id?: string;
    type: $Enums.LogType;
    action?: $Enums.ActionType | null;
    userId?: string | null;
    level?: $Enums.LogLevel | null;
    message: string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type SystemLogUncheckedCreateInput = {
    id?: string;
    type: $Enums.LogType;
    action?: $Enums.ActionType | null;
    userId?: string | null;
    level?: $Enums.LogLevel | null;
    message: string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type SystemLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType;
    action?: Prisma.NullableEnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType | null;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.NullableEnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType;
    action?: Prisma.NullableEnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType | null;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.NullableEnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemLogCreateManyInput = {
    id?: string;
    type: $Enums.LogType;
    action?: $Enums.ActionType | null;
    userId?: string | null;
    level?: $Enums.LogLevel | null;
    message: string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type SystemLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType;
    action?: Prisma.NullableEnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType | null;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.NullableEnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType;
    action?: Prisma.NullableEnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType | null;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.NullableEnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SystemLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SystemLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnumLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.LogType;
};
export type NullableEnumActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActionType | null;
};
export type NullableEnumLogLevelFieldUpdateOperationsInput = {
    set?: $Enums.LogLevel | null;
};
export type SystemLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    action?: boolean;
    userId?: boolean;
    level?: boolean;
    message?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["systemLog"]>;
export type SystemLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    action?: boolean;
    userId?: boolean;
    level?: boolean;
    message?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["systemLog"]>;
export type SystemLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    action?: boolean;
    userId?: boolean;
    level?: boolean;
    message?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["systemLog"]>;
export type SystemLogSelectScalar = {
    id?: boolean;
    type?: boolean;
    action?: boolean;
    userId?: boolean;
    level?: boolean;
    message?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
};
export type SystemLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "action" | "userId" | "level" | "message" | "metadata" | "createdAt", ExtArgs["result"]["systemLog"]>;
export type $SystemLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SystemLog";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: $Enums.LogType;
        action: $Enums.ActionType | null;
        userId: string | null;
        level: $Enums.LogLevel | null;
        message: string;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["systemLog"]>;
    composites: {};
};
export type SystemLogGetPayload<S extends boolean | null | undefined | SystemLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SystemLogPayload, S>;
export type SystemLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SystemLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SystemLogCountAggregateInputType | true;
};
export interface SystemLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SystemLog'];
        meta: {
            name: 'SystemLog';
        };
    };
    findUnique<T extends SystemLogFindUniqueArgs>(args: Prisma.SelectSubset<T, SystemLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SystemLogClient<runtime.Types.Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SystemLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SystemLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SystemLogClient<runtime.Types.Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SystemLogFindFirstArgs>(args?: Prisma.SelectSubset<T, SystemLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__SystemLogClient<runtime.Types.Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SystemLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SystemLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SystemLogClient<runtime.Types.Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SystemLogFindManyArgs>(args?: Prisma.SelectSubset<T, SystemLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SystemLogCreateArgs>(args: Prisma.SelectSubset<T, SystemLogCreateArgs<ExtArgs>>): Prisma.Prisma__SystemLogClient<runtime.Types.Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SystemLogCreateManyArgs>(args?: Prisma.SelectSubset<T, SystemLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SystemLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SystemLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SystemLogDeleteArgs>(args: Prisma.SelectSubset<T, SystemLogDeleteArgs<ExtArgs>>): Prisma.Prisma__SystemLogClient<runtime.Types.Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SystemLogUpdateArgs>(args: Prisma.SelectSubset<T, SystemLogUpdateArgs<ExtArgs>>): Prisma.Prisma__SystemLogClient<runtime.Types.Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SystemLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, SystemLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SystemLogUpdateManyArgs>(args: Prisma.SelectSubset<T, SystemLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SystemLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SystemLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SystemLogUpsertArgs>(args: Prisma.SelectSubset<T, SystemLogUpsertArgs<ExtArgs>>): Prisma.Prisma__SystemLogClient<runtime.Types.Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SystemLogCountArgs>(args?: Prisma.Subset<T, SystemLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SystemLogCountAggregateOutputType> : number>;
    aggregate<T extends SystemLogAggregateArgs>(args: Prisma.Subset<T, SystemLogAggregateArgs>): Prisma.PrismaPromise<GetSystemLogAggregateType<T>>;
    groupBy<T extends SystemLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SystemLogGroupByArgs['orderBy'];
    } : {
        orderBy?: SystemLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SystemLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SystemLogFieldRefs;
}
export interface Prisma__SystemLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SystemLogFieldRefs {
    readonly id: Prisma.FieldRef<"SystemLog", 'String'>;
    readonly type: Prisma.FieldRef<"SystemLog", 'LogType'>;
    readonly action: Prisma.FieldRef<"SystemLog", 'ActionType'>;
    readonly userId: Prisma.FieldRef<"SystemLog", 'String'>;
    readonly level: Prisma.FieldRef<"SystemLog", 'LogLevel'>;
    readonly message: Prisma.FieldRef<"SystemLog", 'String'>;
    readonly metadata: Prisma.FieldRef<"SystemLog", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"SystemLog", 'DateTime'>;
}
export type SystemLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemLogSelect<ExtArgs> | null;
    omit?: Prisma.SystemLogOmit<ExtArgs> | null;
    where: Prisma.SystemLogWhereUniqueInput;
};
export type SystemLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemLogSelect<ExtArgs> | null;
    omit?: Prisma.SystemLogOmit<ExtArgs> | null;
    where: Prisma.SystemLogWhereUniqueInput;
};
export type SystemLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemLogSelect<ExtArgs> | null;
    omit?: Prisma.SystemLogOmit<ExtArgs> | null;
    where?: Prisma.SystemLogWhereInput;
    orderBy?: Prisma.SystemLogOrderByWithRelationInput | Prisma.SystemLogOrderByWithRelationInput[];
    cursor?: Prisma.SystemLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SystemLogScalarFieldEnum | Prisma.SystemLogScalarFieldEnum[];
};
export type SystemLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemLogSelect<ExtArgs> | null;
    omit?: Prisma.SystemLogOmit<ExtArgs> | null;
    where?: Prisma.SystemLogWhereInput;
    orderBy?: Prisma.SystemLogOrderByWithRelationInput | Prisma.SystemLogOrderByWithRelationInput[];
    cursor?: Prisma.SystemLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SystemLogScalarFieldEnum | Prisma.SystemLogScalarFieldEnum[];
};
export type SystemLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemLogSelect<ExtArgs> | null;
    omit?: Prisma.SystemLogOmit<ExtArgs> | null;
    where?: Prisma.SystemLogWhereInput;
    orderBy?: Prisma.SystemLogOrderByWithRelationInput | Prisma.SystemLogOrderByWithRelationInput[];
    cursor?: Prisma.SystemLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SystemLogScalarFieldEnum | Prisma.SystemLogScalarFieldEnum[];
};
export type SystemLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemLogSelect<ExtArgs> | null;
    omit?: Prisma.SystemLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SystemLogCreateInput, Prisma.SystemLogUncheckedCreateInput>;
};
export type SystemLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SystemLogCreateManyInput | Prisma.SystemLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SystemLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SystemLogOmit<ExtArgs> | null;
    data: Prisma.SystemLogCreateManyInput | Prisma.SystemLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SystemLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemLogSelect<ExtArgs> | null;
    omit?: Prisma.SystemLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SystemLogUpdateInput, Prisma.SystemLogUncheckedUpdateInput>;
    where: Prisma.SystemLogWhereUniqueInput;
};
export type SystemLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SystemLogUpdateManyMutationInput, Prisma.SystemLogUncheckedUpdateManyInput>;
    where?: Prisma.SystemLogWhereInput;
    limit?: number;
};
export type SystemLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SystemLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SystemLogUpdateManyMutationInput, Prisma.SystemLogUncheckedUpdateManyInput>;
    where?: Prisma.SystemLogWhereInput;
    limit?: number;
};
export type SystemLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemLogSelect<ExtArgs> | null;
    omit?: Prisma.SystemLogOmit<ExtArgs> | null;
    where: Prisma.SystemLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.SystemLogCreateInput, Prisma.SystemLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SystemLogUpdateInput, Prisma.SystemLogUncheckedUpdateInput>;
};
export type SystemLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemLogSelect<ExtArgs> | null;
    omit?: Prisma.SystemLogOmit<ExtArgs> | null;
    where: Prisma.SystemLogWhereUniqueInput;
};
export type SystemLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SystemLogWhereInput;
    limit?: number;
};
export type SystemLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemLogSelect<ExtArgs> | null;
    omit?: Prisma.SystemLogOmit<ExtArgs> | null;
};
