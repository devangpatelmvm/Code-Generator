import { Packages } from "../../../models/Packages";
import { Projects } from "../../../models/Projects";
export declare class PackagesRelationsResolver {
    project(packages: Packages, ctx: any): Promise<Projects>;
}
