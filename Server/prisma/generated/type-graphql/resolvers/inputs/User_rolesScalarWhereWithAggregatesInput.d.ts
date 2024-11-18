import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class User_rolesScalarWhereWithAggregatesInput {
    AND?: User_rolesScalarWhereWithAggregatesInput[] | undefined;
    OR?: User_rolesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: User_rolesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    permissions?: StringWithAggregatesFilter | undefined;
}
