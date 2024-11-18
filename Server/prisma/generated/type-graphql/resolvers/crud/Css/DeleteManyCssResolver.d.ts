import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCssArgs } from "./args/DeleteManyCssArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCssResolver {
    deleteManyCss(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCssArgs): Promise<AffectedRowsOutput>;
}
