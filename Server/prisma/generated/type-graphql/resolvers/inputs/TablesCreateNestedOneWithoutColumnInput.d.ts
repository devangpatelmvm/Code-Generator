import { TablesCreateOrConnectWithoutColumnInput } from "../inputs/TablesCreateOrConnectWithoutColumnInput";
import { TablesCreateWithoutColumnInput } from "../inputs/TablesCreateWithoutColumnInput";
import { TablesWhereUniqueInput } from "../inputs/TablesWhereUniqueInput";
export declare class TablesCreateNestedOneWithoutColumnInput {
    create?: TablesCreateWithoutColumnInput | undefined;
    connectOrCreate?: TablesCreateOrConnectWithoutColumnInput | undefined;
    connect?: TablesWhereUniqueInput | undefined;
}
