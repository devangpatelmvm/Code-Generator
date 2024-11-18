import { UsersCreateOrConnectWithoutProjectInput } from "../inputs/UsersCreateOrConnectWithoutProjectInput";
import { UsersCreateWithoutProjectInput } from "../inputs/UsersCreateWithoutProjectInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";
export declare class UsersCreateNestedOneWithoutProjectInput {
    create?: UsersCreateWithoutProjectInput | undefined;
    connectOrCreate?: UsersCreateOrConnectWithoutProjectInput | undefined;
    connect?: UsersWhereUniqueInput | undefined;
}
