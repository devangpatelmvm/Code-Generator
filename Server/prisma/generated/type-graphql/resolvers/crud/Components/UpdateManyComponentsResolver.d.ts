import { GraphQLResolveInfo } from "graphql";
import { UpdateManyComponentsArgs } from "./args/UpdateManyComponentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyComponentsResolver {
    updateManyComponents(ctx: any, info: GraphQLResolveInfo, args: UpdateManyComponentsArgs): Promise<AffectedRowsOutput>;
}
