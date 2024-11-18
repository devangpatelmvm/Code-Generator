import { PackagesOrderByWithRelationInput } from "../../../inputs/PackagesOrderByWithRelationInput";
import { PackagesWhereInput } from "../../../inputs/PackagesWhereInput";
import { PackagesWhereUniqueInput } from "../../../inputs/PackagesWhereUniqueInput";
export declare class AggregatePackagesArgs {
    where?: PackagesWhereInput | undefined;
    orderBy?: PackagesOrderByWithRelationInput[] | undefined;
    cursor?: PackagesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
