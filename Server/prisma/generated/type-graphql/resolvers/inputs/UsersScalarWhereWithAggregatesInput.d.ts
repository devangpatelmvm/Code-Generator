import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UsersScalarWhereWithAggregatesInput {
    AND?: UsersScalarWhereWithAggregatesInput[] | undefined;
    OR?: UsersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UsersScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    first_name?: StringWithAggregatesFilter | undefined;
    last_name?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    user_rolesId?: IntNullableWithAggregatesFilter | undefined;
}
