import { ProjectsAvgOrderByAggregateInput } from "../inputs/ProjectsAvgOrderByAggregateInput";
import { ProjectsCountOrderByAggregateInput } from "../inputs/ProjectsCountOrderByAggregateInput";
import { ProjectsMaxOrderByAggregateInput } from "../inputs/ProjectsMaxOrderByAggregateInput";
import { ProjectsMinOrderByAggregateInput } from "../inputs/ProjectsMinOrderByAggregateInput";
import { ProjectsSumOrderByAggregateInput } from "../inputs/ProjectsSumOrderByAggregateInput";
export declare class ProjectsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    provider?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    framework?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: ProjectsCountOrderByAggregateInput | undefined;
    _avg?: ProjectsAvgOrderByAggregateInput | undefined;
    _max?: ProjectsMaxOrderByAggregateInput | undefined;
    _min?: ProjectsMinOrderByAggregateInput | undefined;
    _sum?: ProjectsSumOrderByAggregateInput | undefined;
}
