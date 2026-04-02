"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = paginate;
exports.parseQuery = parseQuery;
async function paginate(model, params, extraWhere = {}, options = {}) {
    try {
        const { page = 1, pageSize = 10, sortBy, sortOrder = "asc", filters } = params;
        const skip = (Math.max(1, page) - 1) * pageSize;
        const take = pageSize;
        const where = {
            ...extraWhere,
            ...filters,
        };
        const [data, total] = (await Promise.all([
            model.findMany({
                where,
                skip,
                take,
                orderBy: sortBy ? { [sortBy]: sortOrder } : undefined,
                ...options,
            }),
            model.count({ where }),
        ]));
        return {
            data,
            meta: {
                total: total ?? 0,
                page,
                pageSize,
                totalPages: Math.ceil((total ?? 0) / pageSize),
            },
        };
    }
    catch (error) {
        console.error("Pagination error:", error);
        return {
            data: [],
            meta: {
                total: 0,
                page: params.page ?? 1,
                pageSize: params.pageSize ?? 10,
                totalPages: 0,
            },
        };
    }
}
function parseQuery(query) {
    let parsedFilters;
    if (typeof query.filters === "string") {
        parsedFilters = JSON.parse(query.filters);
    }
    else {
        parsedFilters = query.filters;
    }
    const params = {
        page: Number(query.page) || 1,
        pageSize: Number(query.pageSize) || 10,
        search: query.search,
        sortBy: query.sortBy,
        sortOrder: query.sortOrder,
        filters: typeof parsedFilters === "object" && parsedFilters !== null ? parsedFilters : {},
    };
    return params;
}
//# sourceMappingURL=prisma.utils.js.map