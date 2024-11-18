import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProjectsScalarWhereInput {
    AND?: ProjectsScalarWhereInput[] | undefined;
    OR?: ProjectsScalarWhereInput[] | undefined;
    NOT?: ProjectsScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    description?: StringNullableFilter | undefined;
    name?: StringFilter | undefined;
    provider?: StringNullableFilter | undefined;
    url?: StringNullableFilter | undefined;
    framework?: StringFilter | undefined;
    userId?: IntFilter | undefined;
}
