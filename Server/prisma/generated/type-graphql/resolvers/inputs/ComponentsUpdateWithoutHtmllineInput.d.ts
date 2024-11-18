import { CssUpdateManyWithoutComponentNestedInput } from "../inputs/CssUpdateManyWithoutComponentNestedInput";
import { ProjectsUpdateOneRequiredWithoutComponentsNestedInput } from "../inputs/ProjectsUpdateOneRequiredWithoutComponentsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TsLinesUpdateManyWithoutComponentNestedInput } from "../inputs/TsLinesUpdateManyWithoutComponentNestedInput";
export declare class ComponentsUpdateWithoutHtmllineInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    tsLine?: TsLinesUpdateManyWithoutComponentNestedInput | undefined;
    css?: CssUpdateManyWithoutComponentNestedInput | undefined;
    project?: ProjectsUpdateOneRequiredWithoutComponentsNestedInput | undefined;
}
