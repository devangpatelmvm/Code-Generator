import { TablesCreateOrConnectWithoutProjectInput } from "../inputs/TablesCreateOrConnectWithoutProjectInput";
import { TablesCreateWithoutProjectInput } from "../inputs/TablesCreateWithoutProjectInput";
import { TablesWhereUniqueInput } from "../inputs/TablesWhereUniqueInput";
export declare class TablesCreateNestedManyWithoutProjectInput {
    create?: TablesCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: TablesCreateOrConnectWithoutProjectInput[] | undefined;
    connect?: TablesWhereUniqueInput[] | undefined;
}
