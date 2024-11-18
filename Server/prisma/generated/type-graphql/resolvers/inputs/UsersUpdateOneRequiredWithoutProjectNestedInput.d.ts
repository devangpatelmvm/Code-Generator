import { UsersCreateOrConnectWithoutProjectInput } from "../inputs/UsersCreateOrConnectWithoutProjectInput";
import { UsersCreateWithoutProjectInput } from "../inputs/UsersCreateWithoutProjectInput";
import { UsersUpdateWithoutProjectInput } from "../inputs/UsersUpdateWithoutProjectInput";
import { UsersUpsertWithoutProjectInput } from "../inputs/UsersUpsertWithoutProjectInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";
export declare class UsersUpdateOneRequiredWithoutProjectNestedInput {
    create?: UsersCreateWithoutProjectInput | undefined;
    connectOrCreate?: UsersCreateOrConnectWithoutProjectInput | undefined;
    upsert?: UsersUpsertWithoutProjectInput | undefined;
    connect?: UsersWhereUniqueInput | undefined;
    update?: UsersUpdateWithoutProjectInput | undefined;
}
