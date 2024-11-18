import { GraphQLResolveInfo } from "graphql";
import { AggregateTsLinesArgs } from "./args/AggregateTsLinesArgs";
import { AggregateTsLines } from "../../outputs/AggregateTsLines";
export declare class AggregateTsLinesResolver {
    aggregateTsLines(ctx: any, info: GraphQLResolveInfo, args: AggregateTsLinesArgs): Promise<AggregateTsLines>;
}
