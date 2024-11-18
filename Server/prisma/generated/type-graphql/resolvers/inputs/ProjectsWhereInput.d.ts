import { ComponentsListRelationFilter } from "../inputs/ComponentsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PackagesListRelationFilter } from "../inputs/PackagesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TablesListRelationFilter } from "../inputs/TablesListRelationFilter";
import { UsersRelationFilter } from "../inputs/UsersRelationFilter";
export declare class ProjectsWhereInput {
    AND?: ProjectsWhereInput[] | undefined;
    OR?: ProjectsWhereInput[] | undefined;
    NOT?: ProjectsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    description?: StringNullableFilter | undefined;
    name?: StringFilter | undefined;
    provider?: StringNullableFilter | undefined;
    url?: StringNullableFilter | undefined;
    framework?: StringFilter | undefined;
    Package?: PackagesListRelationFilter | undefined;
    table?: TablesListRelationFilter | undefined;
    user?: UsersRelationFilter | undefined;
    userId?: IntFilter | undefined;
    Components?: ComponentsListRelationFilter | undefined;
}
