import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTsLinesArgs } from "./args/DeleteManyTsLinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTsLinesResolver {
    deleteManyTsLines(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTsLinesArgs): Promise<AffectedRowsOutput>;
}
