import { GraphQLResolveInfo } from "graphql";
import { AggregateColumnsArgs } from "./args/AggregateColumnsArgs";
import { AggregateColumns } from "../../outputs/AggregateColumns";
export declare class AggregateColumnsResolver {
    aggregateColumns(ctx: any, info: GraphQLResolveInfo, args: AggregateColumnsArgs): Promise<AggregateColumns>;
}
