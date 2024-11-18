import { HtmlLinesCreateOrConnectWithoutComponentInput } from "../inputs/HtmlLinesCreateOrConnectWithoutComponentInput";
import { HtmlLinesCreateWithoutComponentInput } from "../inputs/HtmlLinesCreateWithoutComponentInput";
import { HtmlLinesScalarWhereInput } from "../inputs/HtmlLinesScalarWhereInput";
import { HtmlLinesUpdateManyWithWhereWithoutComponentInput } from "../inputs/HtmlLinesUpdateManyWithWhereWithoutComponentInput";
import { HtmlLinesUpdateWithWhereUniqueWithoutComponentInput } from "../inputs/HtmlLinesUpdateWithWhereUniqueWithoutComponentInput";
import { HtmlLinesUpsertWithWhereUniqueWithoutComponentInput } from "../inputs/HtmlLinesUpsertWithWhereUniqueWithoutComponentInput";
import { HtmlLinesWhereUniqueInput } from "../inputs/HtmlLinesWhereUniqueInput";
export declare class HtmlLinesUpdateManyWithoutComponentNestedInput {
    create?: HtmlLinesCreateWithoutComponentInput[] | undefined;
    connectOrCreate?: HtmlLinesCreateOrConnectWithoutComponentInput[] | undefined;
    upsert?: HtmlLinesUpsertWithWhereUniqueWithoutComponentInput[] | undefined;
    set?: HtmlLinesWhereUniqueInput[] | undefined;
    disconnect?: HtmlLinesWhereUniqueInput[] | undefined;
    delete?: HtmlLinesWhereUniqueInput[] | undefined;
    connect?: HtmlLinesWhereUniqueInput[] | undefined;
    update?: HtmlLinesUpdateWithWhereUniqueWithoutComponentInput[] | undefined;
    updateMany?: HtmlLinesUpdateManyWithWhereWithoutComponentInput[] | undefined;
    deleteMany?: HtmlLinesScalarWhereInput[] | undefined;
}
