import { HtmlLinesOrderByWithAggregationInput } from "../../../inputs/HtmlLinesOrderByWithAggregationInput";
import { HtmlLinesScalarWhereWithAggregatesInput } from "../../../inputs/HtmlLinesScalarWhereWithAggregatesInput";
import { HtmlLinesWhereInput } from "../../../inputs/HtmlLinesWhereInput";
export declare class GroupByHtmlLinesArgs {
    where?: HtmlLinesWhereInput | undefined;
    orderBy?: HtmlLinesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "line" | "componentId">;
    having?: HtmlLinesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
