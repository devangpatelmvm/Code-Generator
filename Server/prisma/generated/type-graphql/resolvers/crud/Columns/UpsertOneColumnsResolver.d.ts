import { GraphQLResolveInfo } from "graphql";
import { UpsertOneColumnsArgs } from "./args/UpsertOneColumnsArgs";
import { Columns } from "../../../models/Columns";
export declare class UpsertOneColumnsResolver {
    upsertOneColumns(ctx: any, info: GraphQLResolveInfo, args: UpsertOneColumnsArgs): Promise<Columns>;
}
