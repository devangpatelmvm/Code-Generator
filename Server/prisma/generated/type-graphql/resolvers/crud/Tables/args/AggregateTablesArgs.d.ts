import { TablesOrderByWithRelationInput } from "../../../inputs/TablesOrderByWithRelationInput";
import { TablesWhereInput } from "../../../inputs/TablesWhereInput";
import { TablesWhereUniqueInput } from "../../../inputs/TablesWhereUniqueInput";
export declare class AggregateTablesArgs {
    where?: TablesWhereInput | undefined;
    orderBy?: TablesOrderByWithRelationInput[] | undefined;
    cursor?: TablesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
