import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class HtmlLinesScalarWhereWithAggregatesInput {
    AND?: HtmlLinesScalarWhereWithAggregatesInput[] | undefined;
    OR?: HtmlLinesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: HtmlLinesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    line?: StringNullableWithAggregatesFilter | undefined;
    componentId?: IntWithAggregatesFilter | undefined;
}
