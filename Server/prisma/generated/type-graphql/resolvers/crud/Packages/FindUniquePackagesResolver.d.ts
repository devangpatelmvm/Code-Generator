import { GraphQLResolveInfo } from "graphql";
import { FindUniquePackagesArgs } from "./args/FindUniquePackagesArgs";
import { Packages } from "../../../models/Packages";
export declare class FindUniquePackagesResolver {
    findUniquePackages(ctx: any, info: GraphQLResolveInfo, args: FindUniquePackagesArgs): Promise<Packages | null>;
}
