import { GraphQLResolveInfo } from "graphql";
import { FindManyTsLinesArgs } from "./args/FindManyTsLinesArgs";
import { TsLines } from "../../../models/TsLines";
export declare class FindManyTsLinesResolver {
    findManyTsLines(ctx: any, info: GraphQLResolveInfo, args: FindManyTsLinesArgs): Promise<TsLines[]>;
}
