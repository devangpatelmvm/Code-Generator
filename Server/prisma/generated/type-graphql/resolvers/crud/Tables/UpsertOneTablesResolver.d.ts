import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTablesArgs } from "./args/UpsertOneTablesArgs";
import { Tables } from "../../../models/Tables";
export declare class UpsertOneTablesResolver {
    upsertOneTables(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTablesArgs): Promise<Tables>;
}
