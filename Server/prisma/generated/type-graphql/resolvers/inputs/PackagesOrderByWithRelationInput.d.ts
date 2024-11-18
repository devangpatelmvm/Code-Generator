import { ProjectsOrderByWithRelationInput } from "../inputs/ProjectsOrderByWithRelationInput";
export declare class PackagesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    version?: "asc" | "desc" | undefined;
    project?: ProjectsOrderByWithRelationInput | undefined;
    projectId?: "asc" | "desc" | undefined;
}
