import { ProjectsCreateOrConnectWithoutUserInput } from "../inputs/ProjectsCreateOrConnectWithoutUserInput";
import { ProjectsCreateWithoutUserInput } from "../inputs/ProjectsCreateWithoutUserInput";
import { ProjectsScalarWhereInput } from "../inputs/ProjectsScalarWhereInput";
import { ProjectsUpdateManyWithWhereWithoutUserInput } from "../inputs/ProjectsUpdateManyWithWhereWithoutUserInput";
import { ProjectsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ProjectsUpdateWithWhereUniqueWithoutUserInput";
import { ProjectsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ProjectsUpsertWithWhereUniqueWithoutUserInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";
export declare class ProjectsUpdateManyWithoutUserNestedInput {
    create?: ProjectsCreateWithoutUserInput[] | undefined;
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: ProjectsUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    set?: ProjectsWhereUniqueInput[] | undefined;
    disconnect?: ProjectsWhereUniqueInput[] | undefined;
    delete?: ProjectsWhereUniqueInput[] | undefined;
    connect?: ProjectsWhereUniqueInput[] | undefined;
    update?: ProjectsUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: ProjectsUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: ProjectsScalarWhereInput[] | undefined;
}
