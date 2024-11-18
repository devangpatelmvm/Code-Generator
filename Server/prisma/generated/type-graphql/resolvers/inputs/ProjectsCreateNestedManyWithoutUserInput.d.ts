import { ProjectsCreateOrConnectWithoutUserInput } from "../inputs/ProjectsCreateOrConnectWithoutUserInput";
import { ProjectsCreateWithoutUserInput } from "../inputs/ProjectsCreateWithoutUserInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";
export declare class ProjectsCreateNestedManyWithoutUserInput {
    create?: ProjectsCreateWithoutUserInput[] | undefined;
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput[] | undefined;
    connect?: ProjectsWhereUniqueInput[] | undefined;
}
