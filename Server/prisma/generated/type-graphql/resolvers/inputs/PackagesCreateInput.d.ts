import { ProjectsCreateNestedOneWithoutPackageInput } from "../inputs/ProjectsCreateNestedOneWithoutPackageInput";
export declare class PackagesCreateInput {
    name?: string | undefined;
    version?: string | undefined;
    project: ProjectsCreateNestedOneWithoutPackageInput;
}
