import { ColumnsOrderByWithAggregationInput } from "../../../inputs/ColumnsOrderByWithAggregationInput";
import { ColumnsScalarWhereWithAggregatesInput } from "../../../inputs/ColumnsScalarWhereWithAggregatesInput";
import { ColumnsWhereInput } from "../../../inputs/ColumnsWhereInput";
export declare class GroupByColumnsArgs {
    where?: ColumnsWhereInput | undefined;
    orderBy?: ColumnsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "type" | "constraint" | "tableId">;
    having?: ColumnsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
