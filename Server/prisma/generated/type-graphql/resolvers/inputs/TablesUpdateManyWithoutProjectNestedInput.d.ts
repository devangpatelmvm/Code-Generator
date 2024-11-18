import { TablesCreateOrConnectWithoutProjectInput } from "../inputs/TablesCreateOrConnectWithoutProjectInput";
import { TablesCreateWithoutProjectInput } from "../inputs/TablesCreateWithoutProjectInput";
import { TablesScalarWhereInput } from "../inputs/TablesScalarWhereInput";
import { TablesUpdateManyWithWhereWithoutProjectInput } from "../inputs/TablesUpdateManyWithWhereWithoutProjectInput";
import { TablesUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/TablesUpdateWithWhereUniqueWithoutProjectInput";
import { TablesUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/TablesUpsertWithWhereUniqueWithoutProjectInput";
import { TablesWhereUniqueInput } from "../inputs/TablesWhereUniqueInput";
export declare class TablesUpdateManyWithoutProjectNestedInput {
    create?: TablesCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: TablesCreateOrConnectWithoutProjectInput[] | undefined;
    upsert?: TablesUpsertWithWhereUniqueWithoutProjectInput[] | undefined;
    set?: TablesWhereUniqueInput[] | undefined;
    disconnect?: TablesWhereUniqueInput[] | undefined;
    delete?: TablesWhereUniqueInput[] | undefined;
    connect?: TablesWhereUniqueInput[] | undefined;
    update?: TablesUpdateWithWhereUniqueWithoutProjectInput[] | undefined;
    updateMany?: TablesUpdateManyWithWhereWithoutProjectInput[] | undefined;
    deleteMany?: TablesScalarWhereInput[] | undefined;
}
