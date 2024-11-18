import { GraphQLResolveInfo } from "graphql";
import { FindManyHtmlLinesArgs } from "./args/FindManyHtmlLinesArgs";
import { HtmlLines } from "../../../models/HtmlLines";
export declare class FindManyHtmlLinesResolver {
    findManyHtmlLines(ctx: any, info: GraphQLResolveInfo, args: FindManyHtmlLinesArgs): Promise<HtmlLines[]>;
}
