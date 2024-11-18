import { GraphQLResolveInfo } from "graphql";
import { CreateOneTablesArgs } from "./args/CreateOneTablesArgs";
import { Tables } from "../../../models/Tables";
export declare class CreateOneTablesResolver {
    createOneTables(ctx: any, info: GraphQLResolveInfo, args: CreateOneTablesArgs): Promise<Tables>;
}
