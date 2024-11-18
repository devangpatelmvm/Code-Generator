import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTablesArgs } from "./args/DeleteManyTablesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTablesResolver {
    deleteManyTables(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTablesArgs): Promise<AffectedRowsOutput>;
}
