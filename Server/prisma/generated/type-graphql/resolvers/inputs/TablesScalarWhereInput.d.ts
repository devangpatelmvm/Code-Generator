import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TablesScalarWhereInput {
    AND?: TablesScalarWhereInput[] | undefined;
    OR?: TablesScalarWhereInput[] | undefined;
    NOT?: TablesScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringNullableFilter | undefined;
    projectId?: IntFilter | undefined;
}
