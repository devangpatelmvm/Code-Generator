import { ComponentsOrderByWithRelationInput } from "../../../inputs/ComponentsOrderByWithRelationInput";
import { ComponentsWhereInput } from "../../../inputs/ComponentsWhereInput";
import { ComponentsWhereUniqueInput } from "../../../inputs/ComponentsWhereUniqueInput";
export declare class AggregateComponentsArgs {
    where?: ComponentsWhereInput | undefined;
    orderBy?: ComponentsOrderByWithRelationInput[] | undefined;
    cursor?: ComponentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
