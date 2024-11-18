import { HtmlLinesUpdateManyWithoutComponentNestedInput } from "../inputs/HtmlLinesUpdateManyWithoutComponentNestedInput";
import { ProjectsUpdateOneRequiredWithoutComponentsNestedInput } from "../inputs/ProjectsUpdateOneRequiredWithoutComponentsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TsLinesUpdateManyWithoutComponentNestedInput } from "../inputs/TsLinesUpdateManyWithoutComponentNestedInput";
export declare class ComponentsUpdateWithoutCssInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    htmlline?: HtmlLinesUpdateManyWithoutComponentNestedInput | undefined;
    tsLine?: TsLinesUpdateManyWithoutComponentNestedInput | undefined;
    project?: ProjectsUpdateOneRequiredWithoutComponentsNestedInput | undefined;
}
