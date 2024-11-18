import { ComponentsCreateNestedManyWithoutProjectInput } from "../inputs/ComponentsCreateNestedManyWithoutProjectInput";
import { PackagesCreateNestedManyWithoutProjectInput } from "../inputs/PackagesCreateNestedManyWithoutProjectInput";
import { UsersCreateNestedOneWithoutProjectInput } from "../inputs/UsersCreateNestedOneWithoutProjectInput";
export declare class ProjectsCreateWithoutTableInput {
    description?: string | undefined;
    name: string;
    provider?: string | undefined;
    url?: string | undefined;
    framework: string;
    Package?: PackagesCreateNestedManyWithoutProjectInput | undefined;
    user: UsersCreateNestedOneWithoutProjectInput;
    Components?: ComponentsCreateNestedManyWithoutProjectInput | undefined;
}
