import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TablesRelationFilter } from "../inputs/TablesRelationFilter";
export declare class ColumnsWhereInput {
    AND?: ColumnsWhereInput[] | undefined;
    OR?: ColumnsWhereInput[] | undefined;
    NOT?: ColumnsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    constraint?: StringNullableFilter | undefined;
    table?: TablesRelationFilter | undefined;
    tableId?: IntFilter | undefined;
}
