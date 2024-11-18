import { GraphQLResolveInfo } from "graphql";
import { FindManyColumnsArgs } from "./args/FindManyColumnsArgs";
import { Columns } from "../../../models/Columns";
export declare class FindManyColumnsResolver {
    findManyColumns(ctx: any, info: GraphQLResolveInfo, args: FindManyColumnsArgs): Promise<Columns[]>;
}
