import { GraphQLResolveInfo } from "graphql";
import { CreateOneHtmlLinesArgs } from "./args/CreateOneHtmlLinesArgs";
import { HtmlLines } from "../../../models/HtmlLines";
export declare class CreateOneHtmlLinesResolver {
    createOneHtmlLines(ctx: any, info: GraphQLResolveInfo, args: CreateOneHtmlLinesArgs): Promise<HtmlLines>;
}
