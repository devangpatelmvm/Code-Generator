import { ComponentsCreateOrConnectWithoutCssInput } from "../inputs/ComponentsCreateOrConnectWithoutCssInput";
import { ComponentsCreateWithoutCssInput } from "../inputs/ComponentsCreateWithoutCssInput";
import { ComponentsWhereUniqueInput } from "../inputs/ComponentsWhereUniqueInput";
export declare class ComponentsCreateNestedOneWithoutCssInput {
    create?: ComponentsCreateWithoutCssInput | undefined;
    connectOrCreate?: ComponentsCreateOrConnectWithoutCssInput | undefined;
    connect?: ComponentsWhereUniqueInput | undefined;
}
