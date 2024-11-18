import { User_rolesCreateOrConnectWithoutUsersInput } from "../inputs/User_rolesCreateOrConnectWithoutUsersInput";
import { User_rolesCreateWithoutUsersInput } from "../inputs/User_rolesCreateWithoutUsersInput";
import { User_rolesWhereUniqueInput } from "../inputs/User_rolesWhereUniqueInput";
export declare class User_rolesCreateNestedOneWithoutUsersInput {
    create?: User_rolesCreateWithoutUsersInput | undefined;
    connectOrCreate?: User_rolesCreateOrConnectWithoutUsersInput | undefined;
    connect?: User_rolesWhereUniqueInput | undefined;
}
