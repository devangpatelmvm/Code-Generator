import { User_rolesOrderByWithAggregationInput } from "../../../inputs/User_rolesOrderByWithAggregationInput";
import { User_rolesScalarWhereWithAggregatesInput } from "../../../inputs/User_rolesScalarWhereWithAggregatesInput";
import { User_rolesWhereInput } from "../../../inputs/User_rolesWhereInput";
export declare class GroupByUser_rolesArgs {
    where?: User_rolesWhereInput | undefined;
    orderBy?: User_rolesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "permissions">;
    having?: User_rolesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
