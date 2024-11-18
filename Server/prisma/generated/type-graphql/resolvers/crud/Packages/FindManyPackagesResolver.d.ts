import { GraphQLResolveInfo } from "graphql";
import { FindManyPackagesArgs } from "./args/FindManyPackagesArgs";
import { Packages } from "../../../models/Packages";
export declare class FindManyPackagesResolver {
    findManyPackages(ctx: any, info: GraphQLResolveInfo, args: FindManyPackagesArgs): Promise<Packages[]>;
}
