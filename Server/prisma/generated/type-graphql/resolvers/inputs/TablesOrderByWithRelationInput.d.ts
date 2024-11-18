import { ColumnsOrderByRelationAggregateInput } from "../inputs/ColumnsOrderByRelationAggregateInput";
import { ProjectsOrderByWithRelationInput } from "../inputs/ProjectsOrderByWithRelationInput";
export declare class TablesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    project?: ProjectsOrderByWithRelationInput | undefined;
    projectId?: "asc" | "desc" | undefined;
    column?: ColumnsOrderByRelationAggregateInput | undefined;
}
