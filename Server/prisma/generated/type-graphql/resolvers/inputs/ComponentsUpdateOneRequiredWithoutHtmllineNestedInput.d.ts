import { ComponentsCreateOrConnectWithoutHtmllineInput } from "../inputs/ComponentsCreateOrConnectWithoutHtmllineInput";
import { ComponentsCreateWithoutHtmllineInput } from "../inputs/ComponentsCreateWithoutHtmllineInput";
import { ComponentsUpdateWithoutHtmllineInput } from "../inputs/ComponentsUpdateWithoutHtmllineInput";
import { ComponentsUpsertWithoutHtmllineInput } from "../inputs/ComponentsUpsertWithoutHtmllineInput";
import { ComponentsWhereUniqueInput } from "../inputs/ComponentsWhereUniqueInput";
export declare class ComponentsUpdateOneRequiredWithoutHtmllineNestedInput {
    create?: ComponentsCreateWithoutHtmllineInput | undefined;
    connectOrCreate?: ComponentsCreateOrConnectWithoutHtmllineInput | undefined;
    upsert?: ComponentsUpsertWithoutHtmllineInput | undefined;
    connect?: ComponentsWhereUniqueInput | undefined;
    update?: ComponentsUpdateWithoutHtmllineInput | undefined;
}
