import { GraphQLResolveInfo } from "graphql";
import { DeleteOneUser_rolesArgs } from "./args/DeleteOneUser_rolesArgs";
import { User_roles } from "../../../models/User_roles";
export declare class DeleteOneUser_rolesResolver {
    deleteOneUser_roles(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUser_rolesArgs): Promise<User_roles | null>;
}
