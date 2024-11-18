import { ProjectsOrderByWithAggregationInput } from "../../../inputs/ProjectsOrderByWithAggregationInput";
import { ProjectsScalarWhereWithAggregatesInput } from "../../../inputs/ProjectsScalarWhereWithAggregatesInput";
import { ProjectsWhereInput } from "../../../inputs/ProjectsWhereInput";
export declare class GroupByProjectsArgs {
    where?: ProjectsWhereInput | undefined;
    orderBy?: ProjectsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "description" | "name" | "provider" | "url" | "framework" | "userId">;
    having?: ProjectsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
