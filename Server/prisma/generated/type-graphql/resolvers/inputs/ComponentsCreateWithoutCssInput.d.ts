import { HtmlLinesCreateNestedManyWithoutComponentInput } from "../inputs/HtmlLinesCreateNestedManyWithoutComponentInput";
import { ProjectsCreateNestedOneWithoutComponentsInput } from "../inputs/ProjectsCreateNestedOneWithoutComponentsInput";
import { TsLinesCreateNestedManyWithoutComponentInput } from "../inputs/TsLinesCreateNestedManyWithoutComponentInput";
export declare class ComponentsCreateWithoutCssInput {
    name: string;
    htmlline?: HtmlLinesCreateNestedManyWithoutComponentInput | undefined;
    tsLine?: TsLinesCreateNestedManyWithoutComponentInput | undefined;
    project: ProjectsCreateNestedOneWithoutComponentsInput;
}
