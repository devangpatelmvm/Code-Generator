import { GraphQLResolveInfo } from "graphql";
import { FindFirstTsLinesArgs } from "./args/FindFirstTsLinesArgs";
import { TsLines } from "../../../models/TsLines";
export declare class FindFirstTsLinesResolver {
    findFirstTsLines(ctx: any, info: GraphQLResolveInfo, args: FindFirstTsLinesArgs): Promise<TsLines | null>;
}
