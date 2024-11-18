import { HtmlLinesAvgOrderByAggregateInput } from "../inputs/HtmlLinesAvgOrderByAggregateInput";
import { HtmlLinesCountOrderByAggregateInput } from "../inputs/HtmlLinesCountOrderByAggregateInput";
import { HtmlLinesMaxOrderByAggregateInput } from "../inputs/HtmlLinesMaxOrderByAggregateInput";
import { HtmlLinesMinOrderByAggregateInput } from "../inputs/HtmlLinesMinOrderByAggregateInput";
import { HtmlLinesSumOrderByAggregateInput } from "../inputs/HtmlLinesSumOrderByAggregateInput";
export declare class HtmlLinesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    line?: "asc" | "desc" | undefined;
    componentId?: "asc" | "desc" | undefined;
    _count?: HtmlLinesCountOrderByAggregateInput | undefined;
    _avg?: HtmlLinesAvgOrderByAggregateInput | undefined;
    _max?: HtmlLinesMaxOrderByAggregateInput | undefined;
    _min?: HtmlLinesMinOrderByAggregateInput | undefined;
    _sum?: HtmlLinesSumOrderByAggregateInput | undefined;
}
