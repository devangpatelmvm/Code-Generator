import { ComponentsCreateOrConnectWithoutTsLineInput } from "../inputs/ComponentsCreateOrConnectWithoutTsLineInput";
import { ComponentsCreateWithoutTsLineInput } from "../inputs/ComponentsCreateWithoutTsLineInput";
import { ComponentsUpdateWithoutTsLineInput } from "../inputs/ComponentsUpdateWithoutTsLineInput";
import { ComponentsUpsertWithoutTsLineInput } from "../inputs/ComponentsUpsertWithoutTsLineInput";
import { ComponentsWhereUniqueInput } from "../inputs/ComponentsWhereUniqueInput";
export declare class ComponentsUpdateOneRequiredWithoutTsLineNestedInput {
    create?: ComponentsCreateWithoutTsLineInput | undefined;
    connectOrCreate?: ComponentsCreateOrConnectWithoutTsLineInput | undefined;
    upsert?: ComponentsUpsertWithoutTsLineInput | undefined;
    connect?: ComponentsWhereUniqueInput | undefined;
    update?: ComponentsUpdateWithoutTsLineInput | undefined;
}
