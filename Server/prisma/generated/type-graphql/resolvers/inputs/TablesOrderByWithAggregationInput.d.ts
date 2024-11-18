import { TablesAvgOrderByAggregateInput } from "../inputs/TablesAvgOrderByAggregateInput";
import { TablesCountOrderByAggregateInput } from "../inputs/TablesCountOrderByAggregateInput";
import { TablesMaxOrderByAggregateInput } from "../inputs/TablesMaxOrderByAggregateInput";
import { TablesMinOrderByAggregateInput } from "../inputs/TablesMinOrderByAggregateInput";
import { TablesSumOrderByAggregateInput } from "../inputs/TablesSumOrderByAggregateInput";
export declare class TablesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    projectId?: "asc" | "desc" | undefined;
    _count?: TablesCountOrderByAggregateInput | undefined;
    _avg?: TablesAvgOrderByAggregateInput | undefined;
    _max?: TablesMaxOrderByAggregateInput | undefined;
    _min?: TablesMinOrderByAggregateInput | undefined;
    _sum?: TablesSumOrderByAggregateInput | undefined;
}
