import { GraphQLResolveInfo } from "graphql";
import { CreateOnePackagesArgs } from "./args/CreateOnePackagesArgs";
import { Packages } from "../../../models/Packages";
export declare class CreateOnePackagesResolver {
    createOnePackages(ctx: any, info: GraphQLResolveInfo, args: CreateOnePackagesArgs): Promise<Packages>;
}
