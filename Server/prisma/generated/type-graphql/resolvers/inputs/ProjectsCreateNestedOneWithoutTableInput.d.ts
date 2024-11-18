import { ProjectsCreateOrConnectWithoutTableInput } from "../inputs/ProjectsCreateOrConnectWithoutTableInput";
import { ProjectsCreateWithoutTableInput } from "../inputs/ProjectsCreateWithoutTableInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";
export declare class ProjectsCreateNestedOneWithoutTableInput {
    create?: ProjectsCreateWithoutTableInput | undefined;
    connectOrCreate?: ProjectsCreateOrConnectWithoutTableInput | undefined;
    connect?: ProjectsWhereUniqueInput | undefined;
}
