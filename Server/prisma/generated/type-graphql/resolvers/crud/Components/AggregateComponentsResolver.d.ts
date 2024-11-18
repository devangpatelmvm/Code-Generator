import { GraphQLResolveInfo } from "graphql";
import { AggregateComponentsArgs } from "./args/AggregateComponentsArgs";
import { AggregateComponents } from "../../outputs/AggregateComponents";
export declare class AggregateComponentsResolver {
    aggregateComponents(ctx: any, info: GraphQLResolveInfo, args: AggregateComponentsArgs): Promise<AggregateComponents>;
}
