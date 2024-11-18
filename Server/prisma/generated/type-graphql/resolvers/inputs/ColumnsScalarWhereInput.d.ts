import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ColumnsScalarWhereInput {
    AND?: ColumnsScalarWhereInput[] | undefined;
    OR?: ColumnsScalarWhereInput[] | undefined;
    NOT?: ColumnsScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    constraint?: StringNullableFilter | undefined;
    tableId?: IntFilter | undefined;
}
