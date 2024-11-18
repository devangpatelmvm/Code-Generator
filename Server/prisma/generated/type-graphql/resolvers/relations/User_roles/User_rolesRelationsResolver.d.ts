import { User_roles } from "../../../models/User_roles";
import { Users } from "../../../models/Users";
import { User_rolesUsersArgs } from "./args/User_rolesUsersArgs";
export declare class User_rolesRelationsResolver {
    users(user_roles: User_roles, ctx: any, args: User_rolesUsersArgs): Promise<Users[]>;
}
