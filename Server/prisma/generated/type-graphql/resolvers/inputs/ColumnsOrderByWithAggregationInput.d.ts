import { ColumnsAvgOrderByAggregateInput } from "../inputs/ColumnsAvgOrderByAggregateInput";
import { ColumnsCountOrderByAggregateInput } from "../inputs/ColumnsCountOrderByAggregateInput";
import { ColumnsMaxOrderByAggregateInput } from "../inputs/ColumnsMaxOrderByAggregateInput";
import { ColumnsMinOrderByAggregateInput } from "../inputs/ColumnsMinOrderByAggregateInput";
import { ColumnsSumOrderByAggregateInput } from "../inputs/ColumnsSumOrderByAggregateInput";
export declare class ColumnsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    constraint?: "asc" | "desc" | undefined;
    tableId?: "asc" | "desc" | undefined;
    _count?: ColumnsCountOrderByAggregateInput | undefined;
    _avg?: ColumnsAvgOrderByAggregateInput | undefined;
    _max?: ColumnsMaxOrderByAggregateInput | undefined;
    _min?: ColumnsMinOrderByAggregateInput | undefined;
    _sum?: ColumnsSumOrderByAggregateInput | undefined;
}
