import { ColumnsOrderByWithRelationInput } from "../../../inputs/ColumnsOrderByWithRelationInput";
import { ColumnsWhereInput } from "../../../inputs/ColumnsWhereInput";
import { ColumnsWhereUniqueInput } from "../../../inputs/ColumnsWhereUniqueInput";
export declare class FindManyColumnsArgs {
    where?: ColumnsWhereInput | undefined;
    orderBy?: ColumnsOrderByWithRelationInput[] | undefined;
    cursor?: ColumnsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "type" | "constraint" | "tableId"> | undefined;
}
