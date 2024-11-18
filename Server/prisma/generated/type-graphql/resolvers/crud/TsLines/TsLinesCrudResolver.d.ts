import { GraphQLResolveInfo } from "graphql";
import { AggregateTsLinesArgs } from "./args/AggregateTsLinesArgs";
import { CreateOneTsLinesArgs } from "./args/CreateOneTsLinesArgs";
import { DeleteManyTsLinesArgs } from "./args/DeleteManyTsLinesArgs";
import { DeleteOneTsLinesArgs } from "./args/DeleteOneTsLinesArgs";
import { FindFirstTsLinesArgs } from "./args/FindFirstTsLinesArgs";
import { FindManyTsLinesArgs } from "./args/FindManyTsLinesArgs";
import { FindUniqueTsLinesArgs } from "./args/FindUniqueTsLinesArgs";
import { GroupByTsLinesArgs } from "./args/GroupByTsLinesArgs";
import { UpdateManyTsLinesArgs } from "./args/UpdateManyTsLinesArgs";
import { UpdateOneTsLinesArgs } from "./args/UpdateOneTsLinesArgs";
import { UpsertOneTsLinesArgs } from "./args/UpsertOneTsLinesArgs";
import { TsLines } from "../../../models/TsLines";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTsLines } from "../../outputs/AggregateTsLines";
import { TsLinesGroupBy } from "../../outputs/TsLinesGroupBy";
export declare class TsLinesCrudResolver {
    aggregateTsLines(ctx: any, info: GraphQLResolveInfo, args: AggregateTsLinesArgs): Promise<AggregateTsLines>;
    createOneTsLines(ctx: any, info: GraphQLResolveInfo, args: CreateOneTsLinesArgs): Promise<TsLines>;
    deleteManyTsLines(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTsLinesArgs): Promise<AffectedRowsOutput>;
    deleteOneTsLines(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTsLinesArgs): Promise<TsLines | null>;
    findFirstTsLines(ctx: any, info: GraphQLResolveInfo, args: FindFirstTsLinesArgs): Promise<TsLines | null>;
    findManyTsLines(ctx: any, info: GraphQLResolveInfo, args: FindManyTsLinesArgs): Promise<TsLines[]>;
    findUniqueTsLines(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTsLinesArgs): Promise<TsLines | null>;
    groupByTsLines(ctx: any, info: GraphQLResolveInfo, args: GroupByTsLinesArgs): Promise<TsLinesGroupBy[]>;
    updateManyTsLines(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTsLinesArgs): Promise<AffectedRowsOutput>;
    updateOneTsLines(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTsLinesArgs): Promise<TsLines | null>;
    upsertOneTsLines(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTsLinesArgs): Promise<TsLines>;
}
