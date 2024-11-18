import { CssAvgOrderByAggregateInput } from "../inputs/CssAvgOrderByAggregateInput";
import { CssCountOrderByAggregateInput } from "../inputs/CssCountOrderByAggregateInput";
import { CssMaxOrderByAggregateInput } from "../inputs/CssMaxOrderByAggregateInput";
import { CssMinOrderByAggregateInput } from "../inputs/CssMinOrderByAggregateInput";
import { CssSumOrderByAggregateInput } from "../inputs/CssSumOrderByAggregateInput";
export declare class CssOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    componentId?: "asc" | "desc" | undefined;
    _count?: CssCountOrderByAggregateInput | undefined;
    _avg?: CssAvgOrderByAggregateInput | undefined;
    _max?: CssMaxOrderByAggregateInput | undefined;
    _min?: CssMinOrderByAggregateInput | undefined;
    _sum?: CssSumOrderByAggregateInput | undefined;
}
