import { ColumnsCreateNestedManyWithoutTableInput } from "../inputs/ColumnsCreateNestedManyWithoutTableInput";
import { ProjectsCreateNestedOneWithoutTableInput } from "../inputs/ProjectsCreateNestedOneWithoutTableInput";
export declare class TablesCreateInput {
    name?: string | undefined;
    project: ProjectsCreateNestedOneWithoutTableInput;
    column?: ColumnsCreateNestedManyWithoutTableInput | undefined;
}
