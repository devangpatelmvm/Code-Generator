import { GraphQLResolveInfo } from "graphql";
import { AggregateCssArgs } from "./args/AggregateCssArgs";
import { AggregateCss } from "../../outputs/AggregateCss";
export declare class AggregateCssResolver {
    aggregateCss(ctx: any, info: GraphQLResolveInfo, args: AggregateCssArgs): Promise<AggregateCss>;
}
