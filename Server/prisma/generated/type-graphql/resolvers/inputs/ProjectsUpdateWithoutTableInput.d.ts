import { ComponentsUpdateManyWithoutProjectNestedInput } from "../inputs/ComponentsUpdateManyWithoutProjectNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PackagesUpdateManyWithoutProjectNestedInput } from "../inputs/PackagesUpdateManyWithoutProjectNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsersUpdateOneRequiredWithoutProjectNestedInput } from "../inputs/UsersUpdateOneRequiredWithoutProjectNestedInput";
export declare class ProjectsUpdateWithoutTableInput {
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    provider?: NullableStringFieldUpdateOperationsInput | undefined;
    url?: NullableStringFieldUpdateOperationsInput | undefined;
    framework?: StringFieldUpdateOperationsInput | undefined;
    Package?: PackagesUpdateManyWithoutProjectNestedInput | undefined;
    user?: UsersUpdateOneRequiredWithoutProjectNestedInput | undefined;
    Components?: ComponentsUpdateManyWithoutProjectNestedInput | undefined;
}
