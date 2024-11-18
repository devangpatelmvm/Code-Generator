import { ComponentsCreateNestedManyWithoutProjectInput } from "../inputs/ComponentsCreateNestedManyWithoutProjectInput";
import { PackagesCreateNestedManyWithoutProjectInput } from "../inputs/PackagesCreateNestedManyWithoutProjectInput";
import { TablesCreateNestedManyWithoutProjectInput } from "../inputs/TablesCreateNestedManyWithoutProjectInput";
import { UsersCreateNestedOneWithoutProjectInput } from "../inputs/UsersCreateNestedOneWithoutProjectInput";
export declare class ProjectsCreateInput {
    description?: string | undefined;
    name: string;
    provider?: string | undefined;
    url?: string | undefined;
    framework: string;
    Package?: PackagesCreateNestedManyWithoutProjectInput | undefined;
    table?: TablesCreateNestedManyWithoutProjectInput | undefined;
    user: UsersCreateNestedOneWithoutProjectInput;
    Components?: ComponentsCreateNestedManyWithoutProjectInput | undefined;
}
