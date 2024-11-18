import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTablesArgs } from "./args/FindUniqueTablesArgs";
import { Tables } from "../../../models/Tables";
export declare class FindUniqueTablesResolver {
    findUniqueTables(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTablesArgs): Promise<Tables | null>;
}
