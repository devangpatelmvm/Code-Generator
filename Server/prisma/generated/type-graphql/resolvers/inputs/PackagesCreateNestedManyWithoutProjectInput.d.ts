import { PackagesCreateOrConnectWithoutProjectInput } from "../inputs/PackagesCreateOrConnectWithoutProjectInput";
import { PackagesCreateWithoutProjectInput } from "../inputs/PackagesCreateWithoutProjectInput";
import { PackagesWhereUniqueInput } from "../inputs/PackagesWhereUniqueInput";
export declare class PackagesCreateNestedManyWithoutProjectInput {
    create?: PackagesCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: PackagesCreateOrConnectWithoutProjectInput[] | undefined;
    connect?: PackagesWhereUniqueInput[] | undefined;
}
