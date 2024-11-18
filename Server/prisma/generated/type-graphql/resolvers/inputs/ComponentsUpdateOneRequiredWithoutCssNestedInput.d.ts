import { ComponentsCreateOrConnectWithoutCssInput } from "../inputs/ComponentsCreateOrConnectWithoutCssInput";
import { ComponentsCreateWithoutCssInput } from "../inputs/ComponentsCreateWithoutCssInput";
import { ComponentsUpdateWithoutCssInput } from "../inputs/ComponentsUpdateWithoutCssInput";
import { ComponentsUpsertWithoutCssInput } from "../inputs/ComponentsUpsertWithoutCssInput";
import { ComponentsWhereUniqueInput } from "../inputs/ComponentsWhereUniqueInput";
export declare class ComponentsUpdateOneRequiredWithoutCssNestedInput {
    create?: ComponentsCreateWithoutCssInput | undefined;
    connectOrCreate?: ComponentsCreateOrConnectWithoutCssInput | undefined;
    upsert?: ComponentsUpsertWithoutCssInput | undefined;
    connect?: ComponentsWhereUniqueInput | undefined;
    update?: ComponentsUpdateWithoutCssInput | undefined;
}
