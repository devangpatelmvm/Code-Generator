import { GraphQLResolveInfo } from "graphql";
import { DeleteManyHtmlLinesArgs } from "./args/DeleteManyHtmlLinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyHtmlLinesResolver {
    deleteManyHtmlLines(ctx: any, info: GraphQLResolveInfo, args: DeleteManyHtmlLinesArgs): Promise<AffectedRowsOutput>;
}
