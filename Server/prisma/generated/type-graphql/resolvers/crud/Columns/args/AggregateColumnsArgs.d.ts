import { ColumnsOrderByWithRelationInput } from "../../../inputs/ColumnsOrderByWithRelationInput";
import { ColumnsWhereInput } from "../../../inputs/ColumnsWhereInput";
import { ColumnsWhereUniqueInput } from "../../../inputs/ColumnsWhereUniqueInput";
export declare class AggregateColumnsArgs {
    where?: ColumnsWhereInput | undefined;
    orderBy?: ColumnsOrderByWithRelationInput[] | undefined;
    cursor?: ColumnsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
