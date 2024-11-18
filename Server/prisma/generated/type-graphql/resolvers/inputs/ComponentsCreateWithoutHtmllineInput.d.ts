import { CssCreateNestedManyWithoutComponentInput } from "../inputs/CssCreateNestedManyWithoutComponentInput";
import { ProjectsCreateNestedOneWithoutComponentsInput } from "../inputs/ProjectsCreateNestedOneWithoutComponentsInput";
import { TsLinesCreateNestedManyWithoutComponentInput } from "../inputs/TsLinesCreateNestedManyWithoutComponentInput";
export declare class ComponentsCreateWithoutHtmllineInput {
    name: string;
    tsLine?: TsLinesCreateNestedManyWithoutComponentInput | undefined;
    css?: CssCreateNestedManyWithoutComponentInput | undefined;
    project: ProjectsCreateNestedOneWithoutComponentsInput;
}
