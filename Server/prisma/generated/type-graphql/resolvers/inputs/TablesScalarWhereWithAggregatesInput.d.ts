import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class TablesScalarWhereWithAggregatesInput {
    AND?: TablesScalarWhereWithAggregatesInput[] | undefined;
    OR?: TablesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TablesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    projectId?: IntWithAggregatesFilter | undefined;
}
