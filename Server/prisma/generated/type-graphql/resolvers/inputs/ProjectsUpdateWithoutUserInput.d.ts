import { ComponentsUpdateManyWithoutProjectNestedInput } from "../inputs/ComponentsUpdateManyWithoutProjectNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PackagesUpdateManyWithoutProjectNestedInput } from "../inputs/PackagesUpdateManyWithoutProjectNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TablesUpdateManyWithoutProjectNestedInput } from "../inputs/TablesUpdateManyWithoutProjectNestedInput";
export declare class ProjectsUpdateWithoutUserInput {
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    provider?: NullableStringFieldUpdateOperationsInput | undefined;
    url?: NullableStringFieldUpdateOperationsInput | undefined;
    framework?: StringFieldUpdateOperationsInput | undefined;
    Package?: PackagesUpdateManyWithoutProjectNestedInput | undefined;
    table?: TablesUpdateManyWithoutProjectNestedInput | undefined;
    Components?: ComponentsUpdateManyWithoutProjectNestedInput | undefined;
}
