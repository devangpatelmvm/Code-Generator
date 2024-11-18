import { UsersOrderByRelationAggregateInput } from "../inputs/UsersOrderByRelationAggregateInput";
export declare class User_rolesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    permissions?: "asc" | "desc" | undefined;
    users?: UsersOrderByRelationAggregateInput | undefined;
}
