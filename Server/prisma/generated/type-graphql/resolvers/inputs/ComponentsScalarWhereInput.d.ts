import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ComponentsScalarWhereInput {
    AND?: ComponentsScalarWhereInput[] | undefined;
    OR?: ComponentsScalarWhereInput[] | undefined;
    NOT?: ComponentsScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    projectId?: IntFilter | undefined;
}
