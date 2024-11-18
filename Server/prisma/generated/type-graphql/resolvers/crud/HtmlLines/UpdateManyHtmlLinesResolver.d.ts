import { GraphQLResolveInfo } from "graphql";
import { UpdateManyHtmlLinesArgs } from "./args/UpdateManyHtmlLinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyHtmlLinesResolver {
    updateManyHtmlLines(ctx: any, info: GraphQLResolveInfo, args: UpdateManyHtmlLinesArgs): Promise<AffectedRowsOutput>;
}
