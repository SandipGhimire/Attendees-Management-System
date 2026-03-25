import { PaginatedData, FetchParams } from "shared-types";

/**
 * Reusable pagination utility for Prisma models.
 * @param model The Prisma model delegate (e.g., prisma.user)
 * @param params Pagination, filtering, and sorting parameters
 * @param extraWhere Optional additional where conditions
 */

type PrismaModelDelegate<T> = {
  findMany: (args: any) => Promise<T[]>;
  count: (args: any) => Promise<number>;
};

export async function paginate<T>(
  model: PrismaModelDelegate<T>,
  params: FetchParams,
  extraWhere: any = {}
): Promise<PaginatedData<T>> {
  const { page = 1, pageSize = 10, sortBy, sortOrder = "asc", filters } = params;

  const skip = (Math.max(1, page) - 1) * pageSize;
  const take = pageSize;

  const where = {
    ...(extraWhere as object),
    ...(filters as object),
  };

  const [data, total] = await Promise.all([
    model.findMany({
      where,
      skip,
      take,
      orderBy: sortBy ? { [sortBy]: sortOrder } : undefined,
    }),
    model.count({ where }),
  ]);

  return {
    data,
    meta: {
      total: total ? total : 0,
      page,
      pageSize,
      totalPages: Math.ceil(total ? total : 0 / pageSize),
    },
  };
}
