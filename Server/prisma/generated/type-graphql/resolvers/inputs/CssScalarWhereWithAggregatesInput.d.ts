import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class CssScalarWhereWithAggregatesInput {
    AND?: CssScalarWhereWithAggregatesInput[] | undefined;
    OR?: CssScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CssScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    componentId?: IntWithAggregatesFilter | undefined;
}
