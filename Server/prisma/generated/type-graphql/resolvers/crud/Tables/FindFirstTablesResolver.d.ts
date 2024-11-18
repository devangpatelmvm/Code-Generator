import { GraphQLResolveInfo } from "graphql";
import { FindFirstTablesArgs } from "./args/FindFirstTablesArgs";
import { Tables } from "../../../models/Tables";
export declare class FindFirstTablesResolver {
    findFirstTables(ctx: any, info: GraphQLResolveInfo, args: FindFirstTablesArgs): Promise<Tables | null>;
}
