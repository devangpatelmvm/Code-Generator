import { GraphQLResolveInfo } from "graphql";
import { GroupByUser_rolesArgs } from "./args/GroupByUser_rolesArgs";
import { User_rolesGroupBy } from "../../outputs/User_rolesGroupBy";
export declare class GroupByUser_rolesResolver {
    groupByUser_roles(ctx: any, info: GraphQLResolveInfo, args: GroupByUser_rolesArgs): Promise<User_rolesGroupBy[]>;
}
