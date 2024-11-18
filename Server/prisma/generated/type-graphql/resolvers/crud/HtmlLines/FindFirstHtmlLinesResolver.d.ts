import { GraphQLResolveInfo } from "graphql";
import { FindFirstHtmlLinesArgs } from "./args/FindFirstHtmlLinesArgs";
import { HtmlLines } from "../../../models/HtmlLines";
export declare class FindFirstHtmlLinesResolver {
    findFirstHtmlLines(ctx: any, info: GraphQLResolveInfo, args: FindFirstHtmlLinesArgs): Promise<HtmlLines | null>;
}
