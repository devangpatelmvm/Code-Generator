import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCssArgs } from "./args/UpdateManyCssArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCssResolver {
    updateManyCss(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCssArgs): Promise<AffectedRowsOutput>;
}
