import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectsUpdateOneRequiredWithoutPackageNestedInput } from "../inputs/ProjectsUpdateOneRequiredWithoutPackageNestedInput";
export declare class PackagesUpdateInput {
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    version?: NullableStringFieldUpdateOperationsInput | undefined;
    project?: ProjectsUpdateOneRequiredWithoutPackageNestedInput | undefined;
}
