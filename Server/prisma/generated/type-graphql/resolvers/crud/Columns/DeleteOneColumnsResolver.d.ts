import { GraphQLResolveInfo } from "graphql";
import { DeleteOneColumnsArgs } from "./args/DeleteOneColumnsArgs";
import { Columns } from "../../../models/Columns";
export declare class DeleteOneColumnsResolver {
    deleteOneColumns(ctx: any, info: GraphQLResolveInfo, args: DeleteOneColumnsArgs): Promise<Columns | null>;
}
