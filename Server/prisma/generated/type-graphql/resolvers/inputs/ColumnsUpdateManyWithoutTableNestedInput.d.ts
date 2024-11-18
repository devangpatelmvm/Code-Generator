import { ColumnsCreateOrConnectWithoutTableInput } from "../inputs/ColumnsCreateOrConnectWithoutTableInput";
import { ColumnsCreateWithoutTableInput } from "../inputs/ColumnsCreateWithoutTableInput";
import { ColumnsScalarWhereInput } from "../inputs/ColumnsScalarWhereInput";
import { ColumnsUpdateManyWithWhereWithoutTableInput } from "../inputs/ColumnsUpdateManyWithWhereWithoutTableInput";
import { ColumnsUpdateWithWhereUniqueWithoutTableInput } from "../inputs/ColumnsUpdateWithWhereUniqueWithoutTableInput";
import { ColumnsUpsertWithWhereUniqueWithoutTableInput } from "../inputs/ColumnsUpsertWithWhereUniqueWithoutTableInput";
import { ColumnsWhereUniqueInput } from "../inputs/ColumnsWhereUniqueInput";
export declare class ColumnsUpdateManyWithoutTableNestedInput {
    create?: ColumnsCreateWithoutTableInput[] | undefined;
    connectOrCreate?: ColumnsCreateOrConnectWithoutTableInput[] | undefined;
    upsert?: ColumnsUpsertWithWhereUniqueWithoutTableInput[] | undefined;
    set?: ColumnsWhereUniqueInput[] | undefined;
    disconnect?: ColumnsWhereUniqueInput[] | undefined;
    delete?: ColumnsWhereUniqueInput[] | undefined;
    connect?: ColumnsWhereUniqueInput[] | undefined;
    update?: ColumnsUpdateWithWhereUniqueWithoutTableInput[] | undefined;
    updateMany?: ColumnsUpdateManyWithWhereWithoutTableInput[] | undefined;
    deleteMany?: ColumnsScalarWhereInput[] | undefined;
}
