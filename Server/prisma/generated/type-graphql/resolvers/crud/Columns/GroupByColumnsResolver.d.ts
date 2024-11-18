import { GraphQLResolveInfo } from "graphql";
import { GroupByColumnsArgs } from "./args/GroupByColumnsArgs";
import { ColumnsGroupBy } from "../../outputs/ColumnsGroupBy";
export declare class GroupByColumnsResolver {
    groupByColumns(ctx: any, info: GraphQLResolveInfo, args: GroupByColumnsArgs): Promise<ColumnsGroupBy[]>;
}
