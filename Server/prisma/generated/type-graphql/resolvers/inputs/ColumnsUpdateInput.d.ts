import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TablesUpdateOneRequiredWithoutColumnNestedInput } from "../inputs/TablesUpdateOneRequiredWithoutColumnNestedInput";
export declare class ColumnsUpdateInput {
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    type?: NullableStringFieldUpdateOperationsInput | undefined;
    constraint?: NullableStringFieldUpdateOperationsInput | undefined;
    table?: TablesUpdateOneRequiredWithoutColumnNestedInput | undefined;
}
