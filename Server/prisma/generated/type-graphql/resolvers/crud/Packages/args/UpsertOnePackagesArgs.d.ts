import { PackagesCreateInput } from "../../../inputs/PackagesCreateInput";
import { PackagesUpdateInput } from "../../../inputs/PackagesUpdateInput";
import { PackagesWhereUniqueInput } from "../../../inputs/PackagesWhereUniqueInput";
export declare class UpsertOnePackagesArgs {
    where: PackagesWhereUniqueInput;
    create: PackagesCreateInput;
    update: PackagesUpdateInput;
}
