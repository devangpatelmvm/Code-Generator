import { GraphQLResolveInfo } from "graphql";
import { AggregatePackagesArgs } from "./args/AggregatePackagesArgs";
import { CreateOnePackagesArgs } from "./args/CreateOnePackagesArgs";
import { DeleteManyPackagesArgs } from "./args/DeleteManyPackagesArgs";
import { DeleteOnePackagesArgs } from "./args/DeleteOnePackagesArgs";
import { FindFirstPackagesArgs } from "./args/FindFirstPackagesArgs";
import { FindManyPackagesArgs } from "./args/FindManyPackagesArgs";
import { FindUniquePackagesArgs } from "./args/FindUniquePackagesArgs";
import { GroupByPackagesArgs } from "./args/GroupByPackagesArgs";
import { UpdateManyPackagesArgs } from "./args/UpdateManyPackagesArgs";
import { UpdateOnePackagesArgs } from "./args/UpdateOnePackagesArgs";
import { UpsertOnePackagesArgs } from "./args/UpsertOnePackagesArgs";
import { Packages } from "../../../models/Packages";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePackages } from "../../outputs/AggregatePackages";
import { PackagesGroupBy } from "../../outputs/PackagesGroupBy";
export declare class PackagesCrudResolver {
    aggregatePackages(ctx: any, info: GraphQLResolveInfo, args: AggregatePackagesArgs): Promise<AggregatePackages>;
    createOnePackages(ctx: any, info: GraphQLResolveInfo, args: CreateOnePackagesArgs): Promise<Packages>;
    deleteManyPackages(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPackagesArgs): Promise<AffectedRowsOutput>;
    deleteOnePackages(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePackagesArgs): Promise<Packages | null>;
    findFirstPackages(ctx: any, info: GraphQLResolveInfo, args: FindFirstPackagesArgs): Promise<Packages | null>;
    findManyPackages(ctx: any, info: GraphQLResolveInfo, args: FindManyPackagesArgs): Promise<Packages[]>;
    findUniquePackages(ctx: any, info: GraphQLResolveInfo, args: FindUniquePackagesArgs): Promise<Packages | null>;
    groupByPackages(ctx: any, info: GraphQLResolveInfo, args: GroupByPackagesArgs): Promise<PackagesGroupBy[]>;
    updateManyPackages(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPackagesArgs): Promise<AffectedRowsOutput>;
    updateOnePackages(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePackagesArgs): Promise<Packages | null>;
    upsertOnePackages(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePackagesArgs): Promise<Packages>;
}
