import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUser_rolesArgs } from "./args/FindUniqueUser_rolesArgs";
import { User_roles } from "../../../models/User_roles";
export declare class FindUniqueUser_rolesResolver {
    findUniqueUser_roles(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUser_rolesArgs): Promise<User_roles | null>;
}
