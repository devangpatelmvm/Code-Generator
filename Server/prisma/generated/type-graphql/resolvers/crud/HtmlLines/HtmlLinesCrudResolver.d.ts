import { GraphQLResolveInfo } from "graphql";
import { AggregateHtmlLinesArgs } from "./args/AggregateHtmlLinesArgs";
import { CreateOneHtmlLinesArgs } from "./args/CreateOneHtmlLinesArgs";
import { DeleteManyHtmlLinesArgs } from "./args/DeleteManyHtmlLinesArgs";
import { DeleteOneHtmlLinesArgs } from "./args/DeleteOneHtmlLinesArgs";
import { FindFirstHtmlLinesArgs } from "./args/FindFirstHtmlLinesArgs";
import { FindManyHtmlLinesArgs } from "./args/FindManyHtmlLinesArgs";
import { FindUniqueHtmlLinesArgs } from "./args/FindUniqueHtmlLinesArgs";
import { GroupByHtmlLinesArgs } from "./args/GroupByHtmlLinesArgs";
import { UpdateManyHtmlLinesArgs } from "./args/UpdateManyHtmlLinesArgs";
import { UpdateOneHtmlLinesArgs } from "./args/UpdateOneHtmlLinesArgs";
import { UpsertOneHtmlLinesArgs } from "./args/UpsertOneHtmlLinesArgs";
import { HtmlLines } from "../../../models/HtmlLines";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateHtmlLines } from "../../outputs/AggregateHtmlLines";
import { HtmlLinesGroupBy } from "../../outputs/HtmlLinesGroupBy";
export declare class HtmlLinesCrudResolver {
    aggregateHtmlLines(ctx: any, info: GraphQLResolveInfo, args: AggregateHtmlLinesArgs): Promise<AggregateHtmlLines>;
    createOneHtmlLines(ctx: any, info: GraphQLResolveInfo, args: CreateOneHtmlLinesArgs): Promise<HtmlLines>;
    deleteManyHtmlLines(ctx: any, info: GraphQLResolveInfo, args: DeleteManyHtmlLinesArgs): Promise<AffectedRowsOutput>;
    deleteOneHtmlLines(ctx: any, info: GraphQLResolveInfo, args: DeleteOneHtmlLinesArgs): Promise<HtmlLines | null>;
    findFirstHtmlLines(ctx: any, info: GraphQLResolveInfo, args: FindFirstHtmlLinesArgs): Promise<HtmlLines | null>;
    findManyHtmlLines(ctx: any, info: GraphQLResolveInfo, args: FindManyHtmlLinesArgs): Promise<HtmlLines[]>;
    findUniqueHtmlLines(ctx: any, info: GraphQLResolveInfo, args: FindUniqueHtmlLinesArgs): Promise<HtmlLines | null>;
    groupByHtmlLines(ctx: any, info: GraphQLResolveInfo, args: GroupByHtmlLinesArgs): Promise<HtmlLinesGroupBy[]>;
    updateManyHtmlLines(ctx: any, info: GraphQLResolveInfo, args: UpdateManyHtmlLinesArgs): Promise<AffectedRowsOutput>;
    updateOneHtmlLines(ctx: any, info: GraphQLResolveInfo, args: UpdateOneHtmlLinesArgs): Promise<HtmlLines | null>;
    upsertOneHtmlLines(ctx: any, info: GraphQLResolveInfo, args: UpsertOneHtmlLinesArgs): Promise<HtmlLines>;
}
