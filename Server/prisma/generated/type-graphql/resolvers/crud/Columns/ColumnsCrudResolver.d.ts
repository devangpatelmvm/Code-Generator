import { GraphQLResolveInfo } from "graphql";
import { AggregateColumnsArgs } from "./args/AggregateColumnsArgs";
import { CreateOneColumnsArgs } from "./args/CreateOneColumnsArgs";
import { DeleteManyColumnsArgs } from "./args/DeleteManyColumnsArgs";
import { DeleteOneColumnsArgs } from "./args/DeleteOneColumnsArgs";
import { FindFirstColumnsArgs } from "./args/FindFirstColumnsArgs";
import { FindManyColumnsArgs } from "./args/FindManyColumnsArgs";
import { FindUniqueColumnsArgs } from "./args/FindUniqueColumnsArgs";
import { GroupByColumnsArgs } from "./args/GroupByColumnsArgs";
import { UpdateManyColumnsArgs } from "./args/UpdateManyColumnsArgs";
import { UpdateOneColumnsArgs } from "./args/UpdateOneColumnsArgs";
import { UpsertOneColumnsArgs } from "./args/UpsertOneColumnsArgs";
import { Columns } from "../../../models/Columns";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateColumns } from "../../outputs/AggregateColumns";
import { ColumnsGroupBy } from "../../outputs/ColumnsGroupBy";
export declare class ColumnsCrudResolver {
    aggregateColumns(ctx: any, info: GraphQLResolveInfo, args: AggregateColumnsArgs): Promise<AggregateColumns>;
    createOneColumns(ctx: any, info: GraphQLResolveInfo, args: CreateOneColumnsArgs): Promise<Columns>;
    deleteManyColumns(ctx: any, info: GraphQLResolveInfo, args: DeleteManyColumnsArgs): Promise<AffectedRowsOutput>;
    deleteOneColumns(ctx: any, info: GraphQLResolveInfo, args: DeleteOneColumnsArgs): Promise<Columns | null>;
    findFirstColumns(ctx: any, info: GraphQLResolveInfo, args: FindFirstColumnsArgs): Promise<Columns | null>;
    findManyColumns(ctx: any, info: GraphQLResolveInfo, args: FindManyColumnsArgs): Promise<Columns[]>;
    findUniqueColumns(ctx: any, info: GraphQLResolveInfo, args: FindUniqueColumnsArgs): Promise<Columns | null>;
    groupByColumns(ctx: any, info: GraphQLResolveInfo, args: GroupByColumnsArgs): Promise<ColumnsGroupBy[]>;
    updateManyColumns(ctx: any, info: GraphQLResolveInfo, args: UpdateManyColumnsArgs): Promise<AffectedRowsOutput>;
    updateOneColumns(ctx: any, info: GraphQLResolveInfo, args: UpdateOneColumnsArgs): Promise<Columns | null>;
    upsertOneColumns(ctx: any, info: GraphQLResolveInfo, args: UpsertOneColumnsArgs): Promise<Columns>;
}
