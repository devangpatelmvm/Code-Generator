import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class TsLinesScalarWhereWithAggregatesInput {
    AND?: TsLinesScalarWhereWithAggregatesInput[] | undefined;
    OR?: TsLinesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TsLinesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    line?: StringNullableWithAggregatesFilter | undefined;
    componentId?: IntWithAggregatesFilter | undefined;
}
