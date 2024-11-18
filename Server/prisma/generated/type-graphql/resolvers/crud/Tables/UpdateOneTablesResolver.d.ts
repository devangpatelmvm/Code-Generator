import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTablesArgs } from "./args/UpdateOneTablesArgs";
import { Tables } from "../../../models/Tables";
export declare class UpdateOneTablesResolver {
    updateOneTables(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTablesArgs): Promise<Tables | null>;
}
