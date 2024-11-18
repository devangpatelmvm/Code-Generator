import { GraphQLResolveInfo } from "graphql";
import { UpdateOnePackagesArgs } from "./args/UpdateOnePackagesArgs";
import { Packages } from "../../../models/Packages";
export declare class UpdateOnePackagesResolver {
    updateOnePackages(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePackagesArgs): Promise<Packages | null>;
}
