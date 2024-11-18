import { ComponentsOrderByWithAggregationInput } from "../../../inputs/ComponentsOrderByWithAggregationInput";
import { ComponentsScalarWhereWithAggregatesInput } from "../../../inputs/ComponentsScalarWhereWithAggregatesInput";
import { ComponentsWhereInput } from "../../../inputs/ComponentsWhereInput";
export declare class GroupByComponentsArgs {
    where?: ComponentsWhereInput | undefined;
    orderBy?: ComponentsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "projectId">;
    having?: ComponentsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
