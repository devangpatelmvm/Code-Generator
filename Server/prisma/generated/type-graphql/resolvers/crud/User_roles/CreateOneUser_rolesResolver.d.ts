import { GraphQLResolveInfo } from "graphql";
import { CreateOneUser_rolesArgs } from "./args/CreateOneUser_rolesArgs";
import { User_roles } from "../../../models/User_roles";
export declare class CreateOneUser_rolesResolver {
    createOneUser_roles(ctx: any, info: GraphQLResolveInfo, args: CreateOneUser_rolesArgs): Promise<User_roles>;
}
