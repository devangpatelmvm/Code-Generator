import { ProjectsOrderByRelationAggregateInput } from "../inputs/ProjectsOrderByRelationAggregateInput";
import { User_rolesOrderByWithRelationInput } from "../inputs/User_rolesOrderByWithRelationInput";
export declare class UsersOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    first_name?: "asc" | "desc" | undefined;
    last_name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    user_roles?: User_rolesOrderByWithRelationInput | undefined;
    user_rolesId?: "asc" | "desc" | undefined;
    project?: ProjectsOrderByRelationAggregateInput | undefined;
}
