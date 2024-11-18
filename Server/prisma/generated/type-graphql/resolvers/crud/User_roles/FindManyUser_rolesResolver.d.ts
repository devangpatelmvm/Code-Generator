import { GraphQLResolveInfo } from "graphql";
import { FindManyUser_rolesArgs } from "./args/FindManyUser_rolesArgs";
import { User_roles } from "../../../models/User_roles";
export declare class FindManyUser_rolesResolver {
    findManyUser_roles(ctx: any, info: GraphQLResolveInfo, args: FindManyUser_rolesArgs): Promise<User_roles[]>;
}
