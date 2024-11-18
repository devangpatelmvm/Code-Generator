import { TsLinesCreateOrConnectWithoutComponentInput } from "../inputs/TsLinesCreateOrConnectWithoutComponentInput";
import { TsLinesCreateWithoutComponentInput } from "../inputs/TsLinesCreateWithoutComponentInput";
import { TsLinesScalarWhereInput } from "../inputs/TsLinesScalarWhereInput";
import { TsLinesUpdateManyWithWhereWithoutComponentInput } from "../inputs/TsLinesUpdateManyWithWhereWithoutComponentInput";
import { TsLinesUpdateWithWhereUniqueWithoutComponentInput } from "../inputs/TsLinesUpdateWithWhereUniqueWithoutComponentInput";
import { TsLinesUpsertWithWhereUniqueWithoutComponentInput } from "../inputs/TsLinesUpsertWithWhereUniqueWithoutComponentInput";
import { TsLinesWhereUniqueInput } from "../inputs/TsLinesWhereUniqueInput";
export declare class TsLinesUpdateManyWithoutComponentNestedInput {
    create?: TsLinesCreateWithoutComponentInput[] | undefined;
    connectOrCreate?: TsLinesCreateOrConnectWithoutComponentInput[] | undefined;
    upsert?: TsLinesUpsertWithWhereUniqueWithoutComponentInput[] | undefined;
    set?: TsLinesWhereUniqueInput[] | undefined;
    disconnect?: TsLinesWhereUniqueInput[] | undefined;
    delete?: TsLinesWhereUniqueInput[] | undefined;
    connect?: TsLinesWhereUniqueInput[] | undefined;
    update?: TsLinesUpdateWithWhereUniqueWithoutComponentInput[] | undefined;
    updateMany?: TsLinesUpdateManyWithWhereWithoutComponentInput[] | undefined;
    deleteMany?: TsLinesScalarWhereInput[] | undefined;
}
