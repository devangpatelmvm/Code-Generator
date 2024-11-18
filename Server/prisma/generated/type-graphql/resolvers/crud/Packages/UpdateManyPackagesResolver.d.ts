import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPackagesArgs } from "./args/UpdateManyPackagesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPackagesResolver {
    updateManyPackages(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPackagesArgs): Promise<AffectedRowsOutput>;
}
