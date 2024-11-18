import { Tables } from "../models/Tables";
export declare class Columns {
    id: number;
    name?: string | null;
    type?: string | null;
    constraint?: string | null;
    table?: Tables;
    tableId: number;
}
