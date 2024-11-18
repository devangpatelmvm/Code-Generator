import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTsLinesArgs } from "./args/FindUniqueTsLinesArgs";
import { TsLines } from "../../../models/TsLines";
export declare class FindUniqueTsLinesResolver {
    findUniqueTsLines(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTsLinesArgs): Promise<TsLines | null>;
}
