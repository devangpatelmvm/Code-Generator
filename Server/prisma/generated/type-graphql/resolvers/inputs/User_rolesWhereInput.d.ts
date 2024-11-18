import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsersListRelationFilter } from "../inputs/UsersListRelationFilter";
export declare class User_rolesWhereInput {
    AND?: User_rolesWhereInput[] | undefined;
    OR?: User_rolesWhereInput[] | undefined;
    NOT?: User_rolesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    permissions?: StringFilter | undefined;
    users?: UsersListRelationFilter | undefined;
}
