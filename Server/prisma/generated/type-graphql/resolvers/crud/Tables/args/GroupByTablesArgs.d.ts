import { TablesOrderByWithAggregationInput } from "../../../inputs/TablesOrderByWithAggregationInput";
import { TablesScalarWhereWithAggregatesInput } from "../../../inputs/TablesScalarWhereWithAggregatesInput";
import { TablesWhereInput } from "../../../inputs/TablesWhereInput";
export declare class GroupByTablesArgs {
    where?: TablesWhereInput | undefined;
    orderBy?: TablesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "projectId">;
    having?: TablesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
