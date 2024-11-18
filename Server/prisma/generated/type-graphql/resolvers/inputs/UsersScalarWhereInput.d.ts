import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UsersScalarWhereInput {
    AND?: UsersScalarWhereInput[] | undefined;
    OR?: UsersScalarWhereInput[] | undefined;
    NOT?: UsersScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    first_name?: StringFilter | undefined;
    last_name?: StringFilter | undefined;
    email?: StringFilter | undefined;
    password?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    user_rolesId?: IntNullableFilter | undefined;
}
