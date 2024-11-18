import { GraphQLResolveInfo } from "graphql";
import { DeleteManyUser_rolesArgs } from "./args/DeleteManyUser_rolesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyUser_rolesResolver {
    deleteManyUser_roles(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUser_rolesArgs): Promise<AffectedRowsOutput>;
}
