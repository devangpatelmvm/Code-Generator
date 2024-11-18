import { GraphQLResolveInfo } from "graphql";
import { AggregateTablesArgs } from "./args/AggregateTablesArgs";
import { AggregateTables } from "../../outputs/AggregateTables";
export declare class AggregateTablesResolver {
    aggregateTables(ctx: any, info: GraphQLResolveInfo, args: AggregateTablesArgs): Promise<AggregateTables>;
}
