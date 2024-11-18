import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TsLinesScalarWhereInput {
    AND?: TsLinesScalarWhereInput[] | undefined;
    OR?: TsLinesScalarWhereInput[] | undefined;
    NOT?: TsLinesScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    line?: StringNullableFilter | undefined;
    componentId?: IntFilter | undefined;
}
