import { ComponentsRelationFilter } from "../inputs/ComponentsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TsLinesWhereInput {
    AND?: TsLinesWhereInput[] | undefined;
    OR?: TsLinesWhereInput[] | undefined;
    NOT?: TsLinesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    line?: StringNullableFilter | undefined;
    component?: ComponentsRelationFilter | undefined;
    componentId?: IntFilter | undefined;
}
