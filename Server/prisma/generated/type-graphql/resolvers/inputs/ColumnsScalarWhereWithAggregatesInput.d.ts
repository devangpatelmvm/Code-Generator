import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ColumnsScalarWhereWithAggregatesInput {
    AND?: ColumnsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ColumnsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ColumnsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    constraint?: StringNullableWithAggregatesFilter | undefined;
    tableId?: IntWithAggregatesFilter | undefined;
}
