import { ComponentsAvgOrderByAggregateInput } from "../inputs/ComponentsAvgOrderByAggregateInput";
import { ComponentsCountOrderByAggregateInput } from "../inputs/ComponentsCountOrderByAggregateInput";
import { ComponentsMaxOrderByAggregateInput } from "../inputs/ComponentsMaxOrderByAggregateInput";
import { ComponentsMinOrderByAggregateInput } from "../inputs/ComponentsMinOrderByAggregateInput";
import { ComponentsSumOrderByAggregateInput } from "../inputs/ComponentsSumOrderByAggregateInput";
export declare class ComponentsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    projectId?: "asc" | "desc" | undefined;
    _count?: ComponentsCountOrderByAggregateInput | undefined;
    _avg?: ComponentsAvgOrderByAggregateInput | undefined;
    _max?: ComponentsMaxOrderByAggregateInput | undefined;
    _min?: ComponentsMinOrderByAggregateInput | undefined;
    _sum?: ComponentsSumOrderByAggregateInput | undefined;
}
