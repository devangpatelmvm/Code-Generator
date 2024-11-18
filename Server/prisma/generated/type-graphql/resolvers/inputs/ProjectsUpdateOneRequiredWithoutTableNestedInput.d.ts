import { ProjectsCreateOrConnectWithoutTableInput } from "../inputs/ProjectsCreateOrConnectWithoutTableInput";
import { ProjectsCreateWithoutTableInput } from "../inputs/ProjectsCreateWithoutTableInput";
import { ProjectsUpdateWithoutTableInput } from "../inputs/ProjectsUpdateWithoutTableInput";
import { ProjectsUpsertWithoutTableInput } from "../inputs/ProjectsUpsertWithoutTableInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";
export declare class ProjectsUpdateOneRequiredWithoutTableNestedInput {
    create?: ProjectsCreateWithoutTableInput | undefined;
    connectOrCreate?: ProjectsCreateOrConnectWithoutTableInput | undefined;
    upsert?: ProjectsUpsertWithoutTableInput | undefined;
    connect?: ProjectsWhereUniqueInput | undefined;
    update?: ProjectsUpdateWithoutTableInput | undefined;
}
