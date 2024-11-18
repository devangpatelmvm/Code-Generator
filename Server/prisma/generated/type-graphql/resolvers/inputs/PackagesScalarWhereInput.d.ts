import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PackagesScalarWhereInput {
    AND?: PackagesScalarWhereInput[] | undefined;
    OR?: PackagesScalarWhereInput[] | undefined;
    NOT?: PackagesScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringNullableFilter | undefined;
    version?: StringNullableFilter | undefined;
    projectId?: IntFilter | undefined;
}
