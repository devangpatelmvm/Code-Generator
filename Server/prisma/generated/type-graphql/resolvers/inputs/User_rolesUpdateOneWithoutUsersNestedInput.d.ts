import { User_rolesCreateOrConnectWithoutUsersInput } from "../inputs/User_rolesCreateOrConnectWithoutUsersInput";
import { User_rolesCreateWithoutUsersInput } from "../inputs/User_rolesCreateWithoutUsersInput";
import { User_rolesUpdateWithoutUsersInput } from "../inputs/User_rolesUpdateWithoutUsersInput";
import { User_rolesUpsertWithoutUsersInput } from "../inputs/User_rolesUpsertWithoutUsersInput";
import { User_rolesWhereUniqueInput } from "../inputs/User_rolesWhereUniqueInput";
export declare class User_rolesUpdateOneWithoutUsersNestedInput {
    create?: User_rolesCreateWithoutUsersInput | undefined;
    connectOrCreate?: User_rolesCreateOrConnectWithoutUsersInput | undefined;
    upsert?: User_rolesUpsertWithoutUsersInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: User_rolesWhereUniqueInput | undefined;
    update?: User_rolesUpdateWithoutUsersInput | undefined;
}
