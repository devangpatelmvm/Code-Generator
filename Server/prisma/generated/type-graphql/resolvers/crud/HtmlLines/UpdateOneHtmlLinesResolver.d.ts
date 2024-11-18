import { GraphQLResolveInfo } from "graphql";
import { UpdateOneHtmlLinesArgs } from "./args/UpdateOneHtmlLinesArgs";
import { HtmlLines } from "../../../models/HtmlLines";
export declare class UpdateOneHtmlLinesResolver {
    updateOneHtmlLines(ctx: any, info: GraphQLResolveInfo, args: UpdateOneHtmlLinesArgs): Promise<HtmlLines | null>;
}
