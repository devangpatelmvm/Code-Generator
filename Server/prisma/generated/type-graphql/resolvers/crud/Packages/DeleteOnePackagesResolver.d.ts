import { GraphQLResolveInfo } from "graphql";
import { DeleteOnePackagesArgs } from "./args/DeleteOnePackagesArgs";
import { Packages } from "../../../models/Packages";
export declare class DeleteOnePackagesResolver {
    deleteOnePackages(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePackagesArgs): Promise<Packages | null>;
}
