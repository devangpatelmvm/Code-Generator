import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProjectsScalarWhereWithAggregatesInput {
    AND?: ProjectsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProjectsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProjectsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    provider?: StringNullableWithAggregatesFilter | undefined;
    url?: StringNullableWithAggregatesFilter | undefined;
    framework?: StringWithAggregatesFilter | undefined;
    userId?: IntWithAggregatesFilter | undefined;
}
