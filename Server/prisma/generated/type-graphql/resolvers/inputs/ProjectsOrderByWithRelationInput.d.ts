import { ComponentsOrderByRelationAggregateInput } from "../inputs/ComponentsOrderByRelationAggregateInput";
import { PackagesOrderByRelationAggregateInput } from "../inputs/PackagesOrderByRelationAggregateInput";
import { TablesOrderByRelationAggregateInput } from "../inputs/TablesOrderByRelationAggregateInput";
import { UsersOrderByWithRelationInput } from "../inputs/UsersOrderByWithRelationInput";
export declare class ProjectsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    provider?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    framework?: "asc" | "desc" | undefined;
    Package?: PackagesOrderByRelationAggregateInput | undefined;
    table?: TablesOrderByRelationAggregateInput | undefined;
    user?: UsersOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    Components?: ComponentsOrderByRelationAggregateInput | undefined;
}
