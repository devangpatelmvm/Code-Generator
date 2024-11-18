import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTsLinesArgs } from "./args/DeleteOneTsLinesArgs";
import { TsLines } from "../../../models/TsLines";
export declare class DeleteOneTsLinesResolver {
    deleteOneTsLines(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTsLinesArgs): Promise<TsLines | null>;
}
