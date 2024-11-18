import { ProjectsCreateOrConnectWithoutPackageInput } from "../inputs/ProjectsCreateOrConnectWithoutPackageInput";
import { ProjectsCreateWithoutPackageInput } from "../inputs/ProjectsCreateWithoutPackageInput";
import { ProjectsUpdateWithoutPackageInput } from "../inputs/ProjectsUpdateWithoutPackageInput";
import { ProjectsUpsertWithoutPackageInput } from "../inputs/ProjectsUpsertWithoutPackageInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";
export declare class ProjectsUpdateOneRequiredWithoutPackageNestedInput {
    create?: ProjectsCreateWithoutPackageInput | undefined;
    connectOrCreate?: ProjectsCreateOrConnectWithoutPackageInput | undefined;
    upsert?: ProjectsUpsertWithoutPackageInput | undefined;
    connect?: ProjectsWhereUniqueInput | undefined;
    update?: ProjectsUpdateWithoutPackageInput | undefined;
}
