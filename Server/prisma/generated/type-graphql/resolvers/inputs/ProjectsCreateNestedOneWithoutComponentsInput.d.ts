import { ProjectsCreateOrConnectWithoutComponentsInput } from "../inputs/ProjectsCreateOrConnectWithoutComponentsInput";
import { ProjectsCreateWithoutComponentsInput } from "../inputs/ProjectsCreateWithoutComponentsInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";
export declare class ProjectsCreateNestedOneWithoutComponentsInput {
    create?: ProjectsCreateWithoutComponentsInput | undefined;
    connectOrCreate?: ProjectsCreateOrConnectWithoutComponentsInput | undefined;
    connect?: ProjectsWhereUniqueInput | undefined;
}
