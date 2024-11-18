import { CssUpdateManyWithoutComponentNestedInput } from "../inputs/CssUpdateManyWithoutComponentNestedInput";
import { HtmlLinesUpdateManyWithoutComponentNestedInput } from "../inputs/HtmlLinesUpdateManyWithoutComponentNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TsLinesUpdateManyWithoutComponentNestedInput } from "../inputs/TsLinesUpdateManyWithoutComponentNestedInput";
export declare class ComponentsUpdateWithoutProjectInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    htmlline?: HtmlLinesUpdateManyWithoutComponentNestedInput | undefined;
    tsLine?: TsLinesUpdateManyWithoutComponentNestedInput | undefined;
    css?: CssUpdateManyWithoutComponentNestedInput | undefined;
}
