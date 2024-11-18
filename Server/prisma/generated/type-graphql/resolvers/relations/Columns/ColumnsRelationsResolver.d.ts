import { Columns } from "../../../models/Columns";
import { Tables } from "../../../models/Tables";
export declare class ColumnsRelationsResolver {
    table(columns: Columns, ctx: any): Promise<Tables>;
}
