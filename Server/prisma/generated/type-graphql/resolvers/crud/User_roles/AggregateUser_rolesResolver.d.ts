import { GraphQLResolveInfo } from "graphql";
import { AggregateUser_rolesArgs } from "./args/AggregateUser_rolesArgs";
import { AggregateUser_roles } from "../../outputs/AggregateUser_roles";
export declare class AggregateUser_rolesResolver {
    aggregateUser_roles(ctx: any, info: GraphQLResolveInfo, args: AggregateUser_rolesArgs): Promise<AggregateUser_roles>;
}
