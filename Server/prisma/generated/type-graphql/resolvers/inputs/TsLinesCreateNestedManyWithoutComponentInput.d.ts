import { TsLinesCreateOrConnectWithoutComponentInput } from "../inputs/TsLinesCreateOrConnectWithoutComponentInput";
import { TsLinesCreateWithoutComponentInput } from "../inputs/TsLinesCreateWithoutComponentInput";
import { TsLinesWhereUniqueInput } from "../inputs/TsLinesWhereUniqueInput";
export declare class TsLinesCreateNestedManyWithoutComponentInput {
    create?: TsLinesCreateWithoutComponentInput[] | undefined;
    connectOrCreate?: TsLinesCreateOrConnectWithoutComponentInput[] | undefined;
    connect?: TsLinesWhereUniqueInput[] | undefined;
}
