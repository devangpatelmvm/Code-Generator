import { IntFilter } from "../inputs/IntFilter";
import { ProjectsRelationFilter } from "../inputs/ProjectsRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PackagesWhereInput {
    AND?: PackagesWhereInput[] | undefined;
    OR?: PackagesWhereInput[] | undefined;
    NOT?: PackagesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringNullableFilter | undefined;
    version?: StringNullableFilter | undefined;
    project?: ProjectsRelationFilter | undefined;
    projectId?: IntFilter | undefined;
}
