import { ComponentsRelationFilter } from "../inputs/ComponentsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class HtmlLinesWhereInput {
    AND?: HtmlLinesWhereInput[] | undefined;
    OR?: HtmlLinesWhereInput[] | undefined;
    NOT?: HtmlLinesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    line?: StringNullableFilter | undefined;
    component?: ComponentsRelationFilter | undefined;
    componentId?: IntFilter | undefined;
}
