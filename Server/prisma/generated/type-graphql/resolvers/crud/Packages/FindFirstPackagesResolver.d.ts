import { GraphQLResolveInfo } from "graphql";
import { FindFirstPackagesArgs } from "./args/FindFirstPackagesArgs";
import { Packages } from "../../../models/Packages";
export declare class FindFirstPackagesResolver {
    findFirstPackages(ctx: any, info: GraphQLResolveInfo, args: FindFirstPackagesArgs): Promise<Packages | null>;
}
