import { ComponentsRelationFilter } from "../inputs/ComponentsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CssWhereInput {
    AND?: CssWhereInput[] | undefined;
    OR?: CssWhereInput[] | undefined;
    NOT?: CssWhereInput[] | undefined;
    id?: IntFilter | undefined;
    content?: StringNullableFilter | undefined;
    component?: ComponentsRelationFilter | undefined;
    componentId?: IntFilter | undefined;
}
