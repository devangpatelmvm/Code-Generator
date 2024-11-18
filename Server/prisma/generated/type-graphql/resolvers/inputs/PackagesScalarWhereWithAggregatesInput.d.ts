import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class PackagesScalarWhereWithAggregatesInput {
    AND?: PackagesScalarWhereWithAggregatesInput[] | undefined;
    OR?: PackagesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PackagesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    version?: StringNullableWithAggregatesFilter | undefined;
    projectId?: IntWithAggregatesFilter | undefined;
}
