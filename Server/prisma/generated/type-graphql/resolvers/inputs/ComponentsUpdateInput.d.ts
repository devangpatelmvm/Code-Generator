import { CssUpdateManyWithoutComponentNestedInput } from "../inputs/CssUpdateManyWithoutComponentNestedInput";
import { HtmlLinesUpdateManyWithoutComponentNestedInput } from "../inputs/HtmlLinesUpdateManyWithoutComponentNestedInput";
import { ProjectsUpdateOneRequiredWithoutComponentsNestedInput } from "../inputs/ProjectsUpdateOneRequiredWithoutComponentsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TsLinesUpdateManyWithoutComponentNestedInput } from "../inputs/TsLinesUpdateManyWithoutComponentNestedInput";
export declare class ComponentsUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    htmlline?: HtmlLinesUpdateManyWithoutComponentNestedInput | undefined;
    tsLine?: TsLinesUpdateManyWithoutComponentNestedInput | undefined;
    css?: CssUpdateManyWithoutComponentNestedInput | undefined;
    project?: ProjectsUpdateOneRequiredWithoutComponentsNestedInput | undefined;
}
