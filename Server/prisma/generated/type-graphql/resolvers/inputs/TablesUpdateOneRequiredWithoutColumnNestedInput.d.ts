import { TablesCreateOrConnectWithoutColumnInput } from "../inputs/TablesCreateOrConnectWithoutColumnInput";
import { TablesCreateWithoutColumnInput } from "../inputs/TablesCreateWithoutColumnInput";
import { TablesUpdateWithoutColumnInput } from "../inputs/TablesUpdateWithoutColumnInput";
import { TablesUpsertWithoutColumnInput } from "../inputs/TablesUpsertWithoutColumnInput";
import { TablesWhereUniqueInput } from "../inputs/TablesWhereUniqueInput";
export declare class TablesUpdateOneRequiredWithoutColumnNestedInput {
    create?: TablesCreateWithoutColumnInput | undefined;
    connectOrCreate?: TablesCreateOrConnectWithoutColumnInput | undefined;
    upsert?: TablesUpsertWithoutColumnInput | undefined;
    connect?: TablesWhereUniqueInput | undefined;
    update?: TablesUpdateWithoutColumnInput | undefined;
}
