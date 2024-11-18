import { ColumnsCreateInput } from "../../../inputs/ColumnsCreateInput";
import { ColumnsUpdateInput } from "../../../inputs/ColumnsUpdateInput";
import { ColumnsWhereUniqueInput } from "../../../inputs/ColumnsWhereUniqueInput";
export declare class UpsertOneColumnsArgs {
    where: ColumnsWhereUniqueInput;
    create: ColumnsCreateInput;
    update: ColumnsUpdateInput;
}
