import { GraphQLResolveInfo } from "graphql";
import { FindUniqueHtmlLinesArgs } from "./args/FindUniqueHtmlLinesArgs";
import { HtmlLines } from "../../../models/HtmlLines";
export declare class FindUniqueHtmlLinesResolver {
    findUniqueHtmlLines(ctx: any, info: GraphQLResolveInfo, args: FindUniqueHtmlLinesArgs): Promise<HtmlLines | null>;
}
