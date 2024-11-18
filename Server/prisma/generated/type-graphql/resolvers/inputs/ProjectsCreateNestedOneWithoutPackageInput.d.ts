import { ProjectsCreateOrConnectWithoutPackageInput } from "../inputs/ProjectsCreateOrConnectWithoutPackageInput";
import { ProjectsCreateWithoutPackageInput } from "../inputs/ProjectsCreateWithoutPackageInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";
export declare class ProjectsCreateNestedOneWithoutPackageInput {
    create?: ProjectsCreateWithoutPackageInput | undefined;
    connectOrCreate?: ProjectsCreateOrConnectWithoutPackageInput | undefined;
    connect?: ProjectsWhereUniqueInput | undefined;
}
