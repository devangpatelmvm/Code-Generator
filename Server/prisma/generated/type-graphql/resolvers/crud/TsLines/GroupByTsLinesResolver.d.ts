import { GraphQLResolveInfo } from "graphql";
import { GroupByTsLinesArgs } from "./args/GroupByTsLinesArgs";
import { TsLinesGroupBy } from "../../outputs/TsLinesGroupBy";
export declare class GroupByTsLinesResolver {
    groupByTsLines(ctx: any, info: GraphQLResolveInfo, args: GroupByTsLinesArgs): Promise<TsLinesGroupBy[]>;
}
