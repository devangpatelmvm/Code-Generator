import { CssCreateNestedManyWithoutComponentInput } from "../inputs/CssCreateNestedManyWithoutComponentInput";
import { HtmlLinesCreateNestedManyWithoutComponentInput } from "../inputs/HtmlLinesCreateNestedManyWithoutComponentInput";
import { ProjectsCreateNestedOneWithoutComponentsInput } from "../inputs/ProjectsCreateNestedOneWithoutComponentsInput";
export declare class ComponentsCreateWithoutTsLineInput {
    name: string;
    htmlline?: HtmlLinesCreateNestedManyWithoutComponentInput | undefined;
    css?: CssCreateNestedManyWithoutComponentInput | undefined;
    project: ProjectsCreateNestedOneWithoutComponentsInput;
}
