import { GraphQLResolveInfo } from "graphql";
import { UpdateOneColumnsArgs } from "./args/UpdateOneColumnsArgs";
import { Columns } from "../../../models/Columns";
export declare class UpdateOneColumnsResolver {
    updateOneColumns(ctx: any, info: GraphQLResolveInfo, args: UpdateOneColumnsArgs): Promise<Columns | null>;
}
