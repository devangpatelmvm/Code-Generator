import { GraphQLResolveInfo } from "graphql";
import { GroupByTablesArgs } from "./args/GroupByTablesArgs";
import { TablesGroupBy } from "../../outputs/TablesGroupBy";
export declare class GroupByTablesResolver {
    groupByTables(ctx: any, info: GraphQLResolveInfo, args: GroupByTablesArgs): Promise<TablesGroupBy[]>;
}
