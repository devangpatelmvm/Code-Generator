import { PackagesCreateOrConnectWithoutProjectInput } from "../inputs/PackagesCreateOrConnectWithoutProjectInput";
import { PackagesCreateWithoutProjectInput } from "../inputs/PackagesCreateWithoutProjectInput";
import { PackagesScalarWhereInput } from "../inputs/PackagesScalarWhereInput";
import { PackagesUpdateManyWithWhereWithoutProjectInput } from "../inputs/PackagesUpdateManyWithWhereWithoutProjectInput";
import { PackagesUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/PackagesUpdateWithWhereUniqueWithoutProjectInput";
import { PackagesUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/PackagesUpsertWithWhereUniqueWithoutProjectInput";
import { PackagesWhereUniqueInput } from "../inputs/PackagesWhereUniqueInput";
export declare class PackagesUpdateManyWithoutProjectNestedInput {
    create?: PackagesCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: PackagesCreateOrConnectWithoutProjectInput[] | undefined;
    upsert?: PackagesUpsertWithWhereUniqueWithoutProjectInput[] | undefined;
    set?: PackagesWhereUniqueInput[] | undefined;
    disconnect?: PackagesWhereUniqueInput[] | undefined;
    delete?: PackagesWhereUniqueInput[] | undefined;
    connect?: PackagesWhereUniqueInput[] | undefined;
    update?: PackagesUpdateWithWhereUniqueWithoutProjectInput[] | undefined;
    updateMany?: PackagesUpdateManyWithWhereWithoutProjectInput[] | undefined;
    deleteMany?: PackagesScalarWhereInput[] | undefined;
}
