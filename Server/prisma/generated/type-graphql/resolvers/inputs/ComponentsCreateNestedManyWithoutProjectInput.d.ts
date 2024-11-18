import { ComponentsCreateOrConnectWithoutProjectInput } from "../inputs/ComponentsCreateOrConnectWithoutProjectInput";
import { ComponentsCreateWithoutProjectInput } from "../inputs/ComponentsCreateWithoutProjectInput";
import { ComponentsWhereUniqueInput } from "../inputs/ComponentsWhereUniqueInput";
export declare class ComponentsCreateNestedManyWithoutProjectInput {
    create?: ComponentsCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: ComponentsCreateOrConnectWithoutProjectInput[] | undefined;
    connect?: ComponentsWhereUniqueInput[] | undefined;
}
