import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPackagesArgs } from "./args/DeleteManyPackagesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPackagesResolver {
    deleteManyPackages(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPackagesArgs): Promise<AffectedRowsOutput>;
}
