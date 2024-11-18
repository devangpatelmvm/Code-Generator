import { ComponentsCreateOrConnectWithoutProjectInput } from "../inputs/ComponentsCreateOrConnectWithoutProjectInput";
import { ComponentsCreateWithoutProjectInput } from "../inputs/ComponentsCreateWithoutProjectInput";
import { ComponentsScalarWhereInput } from "../inputs/ComponentsScalarWhereInput";
import { ComponentsUpdateManyWithWhereWithoutProjectInput } from "../inputs/ComponentsUpdateManyWithWhereWithoutProjectInput";
import { ComponentsUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/ComponentsUpdateWithWhereUniqueWithoutProjectInput";
import { ComponentsUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/ComponentsUpsertWithWhereUniqueWithoutProjectInput";
import { ComponentsWhereUniqueInput } from "../inputs/ComponentsWhereUniqueInput";
export declare class ComponentsUpdateManyWithoutProjectNestedInput {
    create?: ComponentsCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: ComponentsCreateOrConnectWithoutProjectInput[] | undefined;
    upsert?: ComponentsUpsertWithWhereUniqueWithoutProjectInput[] | undefined;
    set?: ComponentsWhereUniqueInput[] | undefined;
    disconnect?: ComponentsWhereUniqueInput[] | undefined;
    delete?: ComponentsWhereUniqueInput[] | undefined;
    connect?: ComponentsWhereUniqueInput[] | undefined;
    update?: ComponentsUpdateWithWhereUniqueWithoutProjectInput[] | undefined;
    updateMany?: ComponentsUpdateManyWithWhereWithoutProjectInput[] | undefined;
    deleteMany?: ComponentsScalarWhereInput[] | undefined;
}
