import { CssUpdateManyWithoutComponentNestedInput } from "../inputs/CssUpdateManyWithoutComponentNestedInput";
import { HtmlLinesUpdateManyWithoutComponentNestedInput } from "../inputs/HtmlLinesUpdateManyWithoutComponentNestedInput";
import { ProjectsUpdateOneRequiredWithoutComponentsNestedInput } from "../inputs/ProjectsUpdateOneRequiredWithoutComponentsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ComponentsUpdateWithoutTsLineInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    htmlline?: HtmlLinesUpdateManyWithoutComponentNestedInput | undefined;
    css?: CssUpdateManyWithoutComponentNestedInput | undefined;
    project?: ProjectsUpdateOneRequiredWithoutComponentsNestedInput | undefined;
}
