import { GraphQLResolveInfo } from "graphql";
import { CreateOneColumnsArgs } from "./args/CreateOneColumnsArgs";
import { Columns } from "../../../models/Columns";
export declare class CreateOneColumnsResolver {
    createOneColumns(ctx: any, info: GraphQLResolveInfo, args: CreateOneColumnsArgs): Promise<Columns>;
}
