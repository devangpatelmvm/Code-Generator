import { TablesCreateInput } from "../../../inputs/TablesCreateInput";
import { TablesUpdateInput } from "../../../inputs/TablesUpdateInput";
import { TablesWhereUniqueInput } from "../../../inputs/TablesWhereUniqueInput";
export declare class UpsertOneTablesArgs {
    where: TablesWhereUniqueInput;
    create: TablesCreateInput;
    update: TablesUpdateInput;
}
