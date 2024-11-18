import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CssScalarWhereInput {
    AND?: CssScalarWhereInput[] | undefined;
    OR?: CssScalarWhereInput[] | undefined;
    NOT?: CssScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    content?: StringNullableFilter | undefined;
    componentId?: IntFilter | undefined;
}
