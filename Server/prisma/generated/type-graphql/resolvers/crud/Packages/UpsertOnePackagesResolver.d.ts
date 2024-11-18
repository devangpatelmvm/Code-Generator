import { GraphQLResolveInfo } from "graphql";
import { UpsertOnePackagesArgs } from "./args/UpsertOnePackagesArgs";
import { Packages } from "../../../models/Packages";
export declare class UpsertOnePackagesResolver {
    upsertOnePackages(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePackagesArgs): Promise<Packages>;
}
