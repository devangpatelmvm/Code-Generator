import { TablesOrderByWithRelationInput } from "../inputs/TablesOrderByWithRelationInput";
export declare class ColumnsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    constraint?: "asc" | "desc" | undefined;
    table?: TablesOrderByWithRelationInput | undefined;
    tableId?: "asc" | "desc" | undefined;
}
