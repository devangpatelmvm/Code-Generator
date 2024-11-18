import { GraphQLResolveInfo } from "graphql";
import { UpdateManyColumnsArgs } from "./args/UpdateManyColumnsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyColumnsResolver {
    updateManyColumns(ctx: any, info: GraphQLResolveInfo, args: UpdateManyColumnsArgs): Promise<AffectedRowsOutput>;
}
