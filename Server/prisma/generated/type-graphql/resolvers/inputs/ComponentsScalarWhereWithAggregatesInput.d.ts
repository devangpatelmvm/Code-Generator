import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ComponentsScalarWhereWithAggregatesInput {
    AND?: ComponentsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ComponentsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ComponentsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    projectId?: IntWithAggregatesFilter | undefined;
}
