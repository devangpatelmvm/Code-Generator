import { UsersCreateOrConnectWithoutUser_rolesInput } from "../inputs/UsersCreateOrConnectWithoutUser_rolesInput";
import { UsersCreateWithoutUser_rolesInput } from "../inputs/UsersCreateWithoutUser_rolesInput";
import { UsersScalarWhereInput } from "../inputs/UsersScalarWhereInput";
import { UsersUpdateManyWithWhereWithoutUser_rolesInput } from "../inputs/UsersUpdateManyWithWhereWithoutUser_rolesInput";
import { UsersUpdateWithWhereUniqueWithoutUser_rolesInput } from "../inputs/UsersUpdateWithWhereUniqueWithoutUser_rolesInput";
import { UsersUpsertWithWhereUniqueWithoutUser_rolesInput } from "../inputs/UsersUpsertWithWhereUniqueWithoutUser_rolesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";
export declare class UsersUpdateManyWithoutUser_rolesNestedInput {
    create?: UsersCreateWithoutUser_rolesInput[] | undefined;
    connectOrCreate?: UsersCreateOrConnectWithoutUser_rolesInput[] | undefined;
    upsert?: UsersUpsertWithWhereUniqueWithoutUser_rolesInput[] | undefined;
    set?: UsersWhereUniqueInput[] | undefined;
    disconnect?: UsersWhereUniqueInput[] | undefined;
    delete?: UsersWhereUniqueInput[] | undefined;
    connect?: UsersWhereUniqueInput[] | undefined;
    update?: UsersUpdateWithWhereUniqueWithoutUser_rolesInput[] | undefined;
    updateMany?: UsersUpdateManyWithWhereWithoutUser_rolesInput[] | undefined;
    deleteMany?: UsersScalarWhereInput[] | undefined;
}
