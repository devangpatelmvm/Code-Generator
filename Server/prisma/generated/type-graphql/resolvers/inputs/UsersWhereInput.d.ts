import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ProjectsListRelationFilter } from "../inputs/ProjectsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { User_rolesRelationFilter } from "../inputs/User_rolesRelationFilter";
export declare class UsersWhereInput {
    AND?: UsersWhereInput[] | undefined;
    OR?: UsersWhereInput[] | undefined;
    NOT?: UsersWhereInput[] | undefined;
    id?: IntFilter | undefined;
    first_name?: StringFilter | undefined;
    last_name?: StringFilter | undefined;
    email?: StringFilter | undefined;
    password?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    user_roles?: User_rolesRelationFilter | undefined;
    user_rolesId?: IntNullableFilter | undefined;
    project?: ProjectsListRelationFilter | undefined;
}
