import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTablesArgs } from "./args/UpdateManyTablesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTablesResolver {
    updateManyTables(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTablesArgs): Promise<AffectedRowsOutput>;
}
