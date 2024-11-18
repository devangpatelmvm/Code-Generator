import { ProjectsCreateOrConnectWithoutComponentsInput } from "../inputs/ProjectsCreateOrConnectWithoutComponentsInput";
import { ProjectsCreateWithoutComponentsInput } from "../inputs/ProjectsCreateWithoutComponentsInput";
import { ProjectsUpdateWithoutComponentsInput } from "../inputs/ProjectsUpdateWithoutComponentsInput";
import { ProjectsUpsertWithoutComponentsInput } from "../inputs/ProjectsUpsertWithoutComponentsInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";
export declare class ProjectsUpdateOneRequiredWithoutComponentsNestedInput {
    create?: ProjectsCreateWithoutComponentsInput | undefined;
    connectOrCreate?: ProjectsCreateOrConnectWithoutComponentsInput | undefined;
    upsert?: ProjectsUpsertWithoutComponentsInput | undefined;
    connect?: ProjectsWhereUniqueInput | undefined;
    update?: ProjectsUpdateWithoutComponentsInput | undefined;
}
