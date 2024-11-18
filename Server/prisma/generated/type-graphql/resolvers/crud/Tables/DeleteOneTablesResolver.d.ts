import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTablesArgs } from "./args/DeleteOneTablesArgs";
import { Tables } from "../../../models/Tables";
export declare class DeleteOneTablesResolver {
    deleteOneTables(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTablesArgs): Promise<Tables | null>;
}
