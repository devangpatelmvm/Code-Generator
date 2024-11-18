import { ColumnsListRelationFilter } from "../inputs/ColumnsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProjectsRelationFilter } from "../inputs/ProjectsRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TablesWhereInput {
    AND?: TablesWhereInput[] | undefined;
    OR?: TablesWhereInput[] | undefined;
    NOT?: TablesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringNullableFilter | undefined;
    project?: ProjectsRelationFilter | undefined;
    projectId?: IntFilter | undefined;
    column?: ColumnsListRelationFilter | undefined;
}
