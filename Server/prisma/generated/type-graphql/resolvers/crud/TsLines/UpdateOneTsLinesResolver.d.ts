import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTsLinesArgs } from "./args/UpdateOneTsLinesArgs";
import { TsLines } from "../../../models/TsLines";
export declare class UpdateOneTsLinesResolver {
    updateOneTsLines(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTsLinesArgs): Promise<TsLines | null>;
}
