import { GraphQLResolveInfo } from "graphql";
import { GroupByHtmlLinesArgs } from "./args/GroupByHtmlLinesArgs";
import { HtmlLinesGroupBy } from "../../outputs/HtmlLinesGroupBy";
export declare class GroupByHtmlLinesResolver {
    groupByHtmlLines(ctx: any, info: GraphQLResolveInfo, args: GroupByHtmlLinesArgs): Promise<HtmlLinesGroupBy[]>;
}
