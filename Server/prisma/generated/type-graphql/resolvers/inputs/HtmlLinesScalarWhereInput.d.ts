import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class HtmlLinesScalarWhereInput {
    AND?: HtmlLinesScalarWhereInput[] | undefined;
    OR?: HtmlLinesScalarWhereInput[] | undefined;
    NOT?: HtmlLinesScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    line?: StringNullableFilter | undefined;
    componentId?: IntFilter | undefined;
}
