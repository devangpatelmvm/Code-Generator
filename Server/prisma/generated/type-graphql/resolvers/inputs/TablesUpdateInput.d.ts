import { ColumnsUpdateManyWithoutTableNestedInput } from "../inputs/ColumnsUpdateManyWithoutTableNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectsUpdateOneRequiredWithoutTableNestedInput } from "../inputs/ProjectsUpdateOneRequiredWithoutTableNestedInput";
export declare class TablesUpdateInput {
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    project?: ProjectsUpdateOneRequiredWithoutTableNestedInput | undefined;
    column?: ColumnsUpdateManyWithoutTableNestedInput | undefined;
}
