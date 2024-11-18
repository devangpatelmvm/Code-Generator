import { PackagesOrderByWithAggregationInput } from "../../../inputs/PackagesOrderByWithAggregationInput";
import { PackagesScalarWhereWithAggregatesInput } from "../../../inputs/PackagesScalarWhereWithAggregatesInput";
import { PackagesWhereInput } from "../../../inputs/PackagesWhereInput";
export declare class GroupByPackagesArgs {
    where?: PackagesWhereInput | undefined;
    orderBy?: PackagesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "version" | "projectId">;
    having?: PackagesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
