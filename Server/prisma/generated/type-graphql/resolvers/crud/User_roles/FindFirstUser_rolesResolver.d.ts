import { GraphQLResolveInfo } from "graphql";
import { FindFirstUser_rolesArgs } from "./args/FindFirstUser_rolesArgs";
import { User_roles } from "../../../models/User_roles";
export declare class FindFirstUser_rolesResolver {
    findFirstUser_roles(ctx: any, info: GraphQLResolveInfo, args: FindFirstUser_rolesArgs): Promise<User_roles | null>;
}
