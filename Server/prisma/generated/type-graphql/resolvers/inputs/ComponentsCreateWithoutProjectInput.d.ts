import { CssCreateNestedManyWithoutComponentInput } from "../inputs/CssCreateNestedManyWithoutComponentInput";
import { HtmlLinesCreateNestedManyWithoutComponentInput } from "../inputs/HtmlLinesCreateNestedManyWithoutComponentInput";
import { TsLinesCreateNestedManyWithoutComponentInput } from "../inputs/TsLinesCreateNestedManyWithoutComponentInput";
export declare class ComponentsCreateWithoutProjectInput {
    name: string;
    htmlline?: HtmlLinesCreateNestedManyWithoutComponentInput | undefined;
    tsLine?: TsLinesCreateNestedManyWithoutComponentInput | undefined;
    css?: CssCreateNestedManyWithoutComponentInput | undefined;
}
