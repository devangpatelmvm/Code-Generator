import { GraphQLResolveInfo } from "graphql";
import { FindFirstColumnsArgs } from "./args/FindFirstColumnsArgs";
import { Columns } from "../../../models/Columns";
export declare class FindFirstColumnsResolver {
    findFirstColumns(ctx: any, info: GraphQLResolveInfo, args: FindFirstColumnsArgs): Promise<Columns | null>;
}
