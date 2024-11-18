import { TablesCreateNestedOneWithoutColumnInput } from "../inputs/TablesCreateNestedOneWithoutColumnInput";
export declare class ColumnsCreateInput {
    name?: string | undefined;
    type?: string | undefined;
    constraint?: string | undefined;
    table: TablesCreateNestedOneWithoutColumnInput;
}
