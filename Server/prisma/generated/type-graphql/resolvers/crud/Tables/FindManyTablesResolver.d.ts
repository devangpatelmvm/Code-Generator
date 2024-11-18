import { GraphQLResolveInfo } from "graphql";
import { FindManyTablesArgs } from "./args/FindManyTablesArgs";
import { Tables } from "../../../models/Tables";
export declare class FindManyTablesResolver {
    findManyTables(ctx: any, info: GraphQLResolveInfo, args: FindManyTablesArgs): Promise<Tables[]>;
}
