import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProjectsUpdateManyMutationInput {
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    provider?: NullableStringFieldUpdateOperationsInput | undefined;
    url?: NullableStringFieldUpdateOperationsInput | undefined;
    framework?: StringFieldUpdateOperationsInput | undefined;
}
