import { GraphQLResolveInfo } from "graphql";
import { DeleteOneHtmlLinesArgs } from "./args/DeleteOneHtmlLinesArgs";
import { HtmlLines } from "../../../models/HtmlLines";
export declare class DeleteOneHtmlLinesResolver {
    deleteOneHtmlLines(ctx: any, info: GraphQLResolveInfo, args: DeleteOneHtmlLinesArgs): Promise<HtmlLines | null>;
}
