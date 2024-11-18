import { GraphQLResolveInfo } from "graphql";
import { UpsertOneHtmlLinesArgs } from "./args/UpsertOneHtmlLinesArgs";
import { HtmlLines } from "../../../models/HtmlLines";
export declare class UpsertOneHtmlLinesResolver {
    upsertOneHtmlLines(ctx: any, info: GraphQLResolveInfo, args: UpsertOneHtmlLinesArgs): Promise<HtmlLines>;
}
