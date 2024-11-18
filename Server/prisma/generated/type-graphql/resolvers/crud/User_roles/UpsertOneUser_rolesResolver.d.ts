import { GraphQLResolveInfo } from "graphql";
import { UpsertOneUser_rolesArgs } from "./args/UpsertOneUser_rolesArgs";
import { User_roles } from "../../../models/User_roles";
export declare class UpsertOneUser_rolesResolver {
    upsertOneUser_roles(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUser_rolesArgs): Promise<User_roles>;
}
