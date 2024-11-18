import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTsLinesArgs } from "./args/UpsertOneTsLinesArgs";
import { TsLines } from "../../../models/TsLines";
export declare class UpsertOneTsLinesResolver {
    upsertOneTsLines(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTsLinesArgs): Promise<TsLines>;
}
