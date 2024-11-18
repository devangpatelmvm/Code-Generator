import { ComponentsCreateOrConnectWithoutTsLineInput } from "../inputs/ComponentsCreateOrConnectWithoutTsLineInput";
import { ComponentsCreateWithoutTsLineInput } from "../inputs/ComponentsCreateWithoutTsLineInput";
import { ComponentsWhereUniqueInput } from "../inputs/ComponentsWhereUniqueInput";
export declare class ComponentsCreateNestedOneWithoutTsLineInput {
    create?: ComponentsCreateWithoutTsLineInput | undefined;
    connectOrCreate?: ComponentsCreateOrConnectWithoutTsLineInput | undefined;
    connect?: ComponentsWhereUniqueInput | undefined;
}
