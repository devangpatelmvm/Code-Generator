import { GraphQLResolveInfo } from "graphql";
import { UpdateOneUser_rolesArgs } from "./args/UpdateOneUser_rolesArgs";
import { User_roles } from "../../../models/User_roles";
export declare class UpdateOneUser_rolesResolver {
    updateOneUser_roles(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUser_rolesArgs): Promise<User_roles | null>;
}
