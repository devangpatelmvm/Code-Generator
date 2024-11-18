import { GraphQLResolveInfo } from "graphql";
import { DeleteManyColumnsArgs } from "./args/DeleteManyColumnsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyColumnsResolver {
    deleteManyColumns(ctx: any, info: GraphQLResolveInfo, args: DeleteManyColumnsArgs): Promise<AffectedRowsOutput>;
}
