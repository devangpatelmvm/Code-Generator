import { ComponentsCreateNestedManyWithoutProjectInput } from "../inputs/ComponentsCreateNestedManyWithoutProjectInput";
import { TablesCreateNestedManyWithoutProjectInput } from "../inputs/TablesCreateNestedManyWithoutProjectInput";
import { UsersCreateNestedOneWithoutProjectInput } from "../inputs/UsersCreateNestedOneWithoutProjectInput";
export declare class ProjectsCreateWithoutPackageInput {
    description?: string | undefined;
    name: string;
    provider?: string | undefined;
    url?: string | undefined;
    framework: string;
    table?: TablesCreateNestedManyWithoutProjectInput | undefined;
    user: UsersCreateNestedOneWithoutProjectInput;
    Components?: ComponentsCreateNestedManyWithoutProjectInput | undefined;
}
