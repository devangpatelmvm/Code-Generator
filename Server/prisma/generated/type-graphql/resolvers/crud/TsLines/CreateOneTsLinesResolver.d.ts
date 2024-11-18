import { GraphQLResolveInfo } from "graphql";
import { CreateOneTsLinesArgs } from "./args/CreateOneTsLinesArgs";
import { TsLines } from "../../../models/TsLines";
export declare class CreateOneTsLinesResolver {
    createOneTsLines(ctx: any, info: GraphQLResolveInfo, args: CreateOneTsLinesArgs): Promise<TsLines>;
}
