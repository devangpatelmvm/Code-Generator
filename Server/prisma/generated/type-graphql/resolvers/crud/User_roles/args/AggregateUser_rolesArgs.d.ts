import { User_rolesOrderByWithRelationInput } from "../../../inputs/User_rolesOrderByWithRelationInput";
import { User_rolesWhereInput } from "../../../inputs/User_rolesWhereInput";
import { User_rolesWhereUniqueInput } from "../../../inputs/User_rolesWhereUniqueInput";
export declare class AggregateUser_rolesArgs {
    where?: User_rolesWhereInput | undefined;
    orderBy?: User_rolesOrderByWithRelationInput[] | undefined;
    cursor?: User_rolesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
