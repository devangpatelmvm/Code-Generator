import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTsLinesArgs } from "./args/UpdateManyTsLinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTsLinesResolver {
    updateManyTsLines(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTsLinesArgs): Promise<AffectedRowsOutput>;
}
