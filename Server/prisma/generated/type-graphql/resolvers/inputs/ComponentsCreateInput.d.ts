import { CssCreateNestedManyWithoutComponentInput } from "../inputs/CssCreateNestedManyWithoutComponentInput";
import { HtmlLinesCreateNestedManyWithoutComponentInput } from "../inputs/HtmlLinesCreateNestedManyWithoutComponentInput";
import { ProjectsCreateNestedOneWithoutComponentsInput } from "../inputs/ProjectsCreateNestedOneWithoutComponentsInput";
import { TsLinesCreateNestedManyWithoutComponentInput } from "../inputs/TsLinesCreateNestedManyWithoutComponentInput";
export declare class ComponentsCreateInput {
    name: string;
    htmlline?: HtmlLinesCreateNestedManyWithoutComponentInput | undefined;
    tsLine?: TsLinesCreateNestedManyWithoutComponentInput | undefined;
    css?: CssCreateNestedManyWithoutComponentInput | undefined;
    project: ProjectsCreateNestedOneWithoutComponentsInput;
}
