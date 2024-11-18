import { GraphQLResolveInfo } from "graphql";
import { FindUniqueColumnsArgs } from "./args/FindUniqueColumnsArgs";
import { Columns } from "../../../models/Columns";
export declare class FindUniqueColumnsResolver {
    findUniqueColumns(ctx: any, info: GraphQLResolveInfo, args: FindUniqueColumnsArgs): Promise<Columns | null>;
}
