import { UsersCreateOrConnectWithoutUser_rolesInput } from "../inputs/UsersCreateOrConnectWithoutUser_rolesInput";
import { UsersCreateWithoutUser_rolesInput } from "../inputs/UsersCreateWithoutUser_rolesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";
export declare class UsersCreateNestedManyWithoutUser_rolesInput {
    create?: UsersCreateWithoutUser_rolesInput[] | undefined;
    connectOrCreate?: UsersCreateOrConnectWithoutUser_rolesInput[] | undefined;
    connect?: UsersWhereUniqueInput[] | undefined;
}
