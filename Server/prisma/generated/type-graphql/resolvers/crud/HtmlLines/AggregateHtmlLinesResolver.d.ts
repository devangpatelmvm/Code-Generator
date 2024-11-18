import { GraphQLResolveInfo } from "graphql";
import { AggregateHtmlLinesArgs } from "./args/AggregateHtmlLinesArgs";
import { AggregateHtmlLines } from "../../outputs/AggregateHtmlLines";
export declare class AggregateHtmlLinesResolver {
    aggregateHtmlLines(ctx: any, info: GraphQLResolveInfo, args: AggregateHtmlLinesArgs): Promise<AggregateHtmlLines>;
}
