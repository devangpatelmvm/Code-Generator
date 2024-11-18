import { GraphQLResolveInfo } from "graphql";
import { DeleteManyComponentsArgs } from "./args/DeleteManyComponentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyComponentsResolver {
    deleteManyComponents(ctx: any, info: GraphQLResolveInfo, args: DeleteManyComponentsArgs): Promise<AffectedRowsOutput>;
}
