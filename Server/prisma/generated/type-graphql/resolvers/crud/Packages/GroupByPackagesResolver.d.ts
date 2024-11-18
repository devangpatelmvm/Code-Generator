import { GraphQLResolveInfo } from "graphql";
import { GroupByPackagesArgs } from "./args/GroupByPackagesArgs";
import { PackagesGroupBy } from "../../outputs/PackagesGroupBy";
export declare class GroupByPackagesResolver {
    groupByPackages(ctx: any, info: GraphQLResolveInfo, args: GroupByPackagesArgs): Promise<PackagesGroupBy[]>;
}
