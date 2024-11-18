import { GraphQLResolveInfo } from "graphql";
import { UpdateManyUser_rolesArgs } from "./args/UpdateManyUser_rolesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyUser_rolesResolver {
    updateManyUser_roles(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUser_rolesArgs): Promise<AffectedRowsOutput>;
}
