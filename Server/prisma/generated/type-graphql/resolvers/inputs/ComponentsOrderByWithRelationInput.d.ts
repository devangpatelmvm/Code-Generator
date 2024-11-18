import { CssOrderByRelationAggregateInput } from "../inputs/CssOrderByRelationAggregateInput";
import { HtmlLinesOrderByRelationAggregateInput } from "../inputs/HtmlLinesOrderByRelationAggregateInput";
import { ProjectsOrderByWithRelationInput } from "../inputs/ProjectsOrderByWithRelationInput";
import { TsLinesOrderByRelationAggregateInput } from "../inputs/TsLinesOrderByRelationAggregateInput";
export declare class ComponentsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    htmlline?: HtmlLinesOrderByRelationAggregateInput | undefined;
    tsLine?: TsLinesOrderByRelationAggregateInput | undefined;
    css?: CssOrderByRelationAggregateInput | undefined;
    project?: ProjectsOrderByWithRelationInput | undefined;
    projectId?: "asc" | "desc" | undefined;
}
