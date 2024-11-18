import { CssListRelationFilter } from "../inputs/CssListRelationFilter";
import { HtmlLinesListRelationFilter } from "../inputs/HtmlLinesListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProjectsRelationFilter } from "../inputs/ProjectsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TsLinesListRelationFilter } from "../inputs/TsLinesListRelationFilter";
export declare class ComponentsWhereInput {
    AND?: ComponentsWhereInput[] | undefined;
    OR?: ComponentsWhereInput[] | undefined;
    NOT?: ComponentsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    htmlline?: HtmlLinesListRelationFilter | undefined;
    tsLine?: TsLinesListRelationFilter | undefined;
    css?: CssListRelationFilter | undefined;
    project?: ProjectsRelationFilter | undefined;
    projectId?: IntFilter | undefined;
}
