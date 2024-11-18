import { GraphQLResolveInfo } from "graphql";
import { AggregateTablesArgs } from "./args/AggregateTablesArgs";
import { CreateOneTablesArgs } from "./args/CreateOneTablesArgs";
import { DeleteManyTablesArgs } from "./args/DeleteManyTablesArgs";
import { DeleteOneTablesArgs } from "./args/DeleteOneTablesArgs";
import { FindFirstTablesArgs } from "./args/FindFirstTablesArgs";
import { FindManyTablesArgs } from "./args/FindManyTablesArgs";
import { FindUniqueTablesArgs } from "./args/FindUniqueTablesArgs";
import { GroupByTablesArgs } from "./args/GroupByTablesArgs";
import { UpdateManyTablesArgs } from "./args/UpdateManyTablesArgs";
import { UpdateOneTablesArgs } from "./args/UpdateOneTablesArgs";
import { UpsertOneTablesArgs } from "./args/UpsertOneTablesArgs";
import { Tables } from "../../../models/Tables";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTables } from "../../outputs/AggregateTables";
import { TablesGroupBy } from "../../outputs/TablesGroupBy";
export declare class TablesCrudResolver {
    aggregateTables(ctx: any, info: GraphQLResolveInfo, args: AggregateTablesArgs): Promise<AggregateTables>;
    createOneTables(ctx: any, info: GraphQLResolveInfo, args: CreateOneTablesArgs): Promise<Tables>;
    deleteManyTables(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTablesArgs): Promise<AffectedRowsOutput>;
    deleteOneTables(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTablesArgs): Promise<Tables | null>;
    findFirstTables(ctx: any, info: GraphQLResolveInfo, args: FindFirstTablesArgs): Promise<Tables | null>;
    findManyTables(ctx: any, info: GraphQLResolveInfo, args: FindManyTablesArgs): Promise<Tables[]>;
    findUniqueTables(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTablesArgs): Promise<Tables | null>;
    groupByTables(ctx: any, info: GraphQLResolveInfo, args: GroupByTablesArgs): Promise<TablesGroupBy[]>;
    updateManyTables(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTablesArgs): Promise<AffectedRowsOutput>;
    updateOneTables(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTablesArgs): Promise<Tables | null>;
    upsertOneTables(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTablesArgs): Promise<Tables>;
}
