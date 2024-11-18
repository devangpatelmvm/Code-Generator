import { TsLinesAvgOrderByAggregateInput } from "../inputs/TsLinesAvgOrderByAggregateInput";
import { TsLinesCountOrderByAggregateInput } from "../inputs/TsLinesCountOrderByAggregateInput";
import { TsLinesMaxOrderByAggregateInput } from "../inputs/TsLinesMaxOrderByAggregateInput";
import { TsLinesMinOrderByAggregateInput } from "../inputs/TsLinesMinOrderByAggregateInput";
import { TsLinesSumOrderByAggregateInput } from "../inputs/TsLinesSumOrderByAggregateInput";
export declare class TsLinesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    line?: "asc" | "desc" | undefined;
    componentId?: "asc" | "desc" | undefined;
    _count?: TsLinesCountOrderByAggregateInput | undefined;
    _avg?: TsLinesAvgOrderByAggregateInput | undefined;
    _max?: TsLinesMaxOrderByAggregateInput | undefined;
    _min?: TsLinesMinOrderByAggregateInput | undefined;
    _sum?: TsLinesSumOrderByAggregateInput | undefined;
}
