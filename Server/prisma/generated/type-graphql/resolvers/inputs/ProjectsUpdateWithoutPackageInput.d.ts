import { ComponentsUpdateManyWithoutProjectNestedInput } from "../inputs/ComponentsUpdateManyWithoutProjectNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TablesUpdateManyWithoutProjectNestedInput } from "../inputs/TablesUpdateManyWithoutProjectNestedInput";
import { UsersUpdateOneRequiredWithoutProjectNestedInput } from "../inputs/UsersUpdateOneRequiredWithoutProjectNestedInput";
export declare class ProjectsUpdateWithoutPackageInput {
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    provider?: NullableStringFieldUpdateOperationsInput | undefined;
    url?: NullableStringFieldUpdateOperationsInput | undefined;
    framework?: StringFieldUpdateOperationsInput | undefined;
    table?: TablesUpdateManyWithoutProjectNestedInput | undefined;
    user?: UsersUpdateOneRequiredWithoutProjectNestedInput | undefined;
    Components?: ComponentsUpdateManyWithoutProjectNestedInput | undefined;
}
