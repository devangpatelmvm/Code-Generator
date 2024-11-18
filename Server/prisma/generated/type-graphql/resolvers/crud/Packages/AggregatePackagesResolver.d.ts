import { GraphQLResolveInfo } from "graphql";
import { AggregatePackagesArgs } from "./args/AggregatePackagesArgs";
import { AggregatePackages } from "../../outputs/AggregatePackages";
export declare class AggregatePackagesResolver {
    aggregatePackages(ctx: any, info: GraphQLResolveInfo, args: AggregatePackagesArgs): Promise<AggregatePackages>;
}
