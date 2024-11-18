import { GraphQLResolveInfo } from "graphql";
import { GroupByComponentsArgs } from "./args/GroupByComponentsArgs";
import { ComponentsGroupBy } from "../../outputs/ComponentsGroupBy";
export declare class GroupByComponentsResolver {
    groupByComponents(ctx: any, info: GraphQLResolveInfo, args: GroupByComponentsArgs): Promise<ComponentsGroupBy[]>;
}
