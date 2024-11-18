import { ComponentsCreateNestedManyWithoutProjectInput } from "../inputs/ComponentsCreateNestedManyWithoutProjectInput";
import { PackagesCreateNestedManyWithoutProjectInput } from "../inputs/PackagesCreateNestedManyWithoutProjectInput";
import { TablesCreateNestedManyWithoutProjectInput } from "../inputs/TablesCreateNestedManyWithoutProjectInput";
export declare class ProjectsCreateWithoutUserInput {
    description?: string | undefined;
    name: string;
    provider?: string | undefined;
    url?: string | undefined;
    framework: string;
    Package?: PackagesCreateNestedManyWithoutProjectInput | undefined;
    table?: TablesCreateNestedManyWithoutProjectInput | undefined;
    Components?: ComponentsCreateNestedManyWithoutProjectInput | undefined;
}
