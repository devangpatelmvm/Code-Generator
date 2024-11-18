import { CssCreateOrConnectWithoutComponentInput } from "../inputs/CssCreateOrConnectWithoutComponentInput";
import { CssCreateWithoutComponentInput } from "../inputs/CssCreateWithoutComponentInput";
import { CssScalarWhereInput } from "../inputs/CssScalarWhereInput";
import { CssUpdateManyWithWhereWithoutComponentInput } from "../inputs/CssUpdateManyWithWhereWithoutComponentInput";
import { CssUpdateWithWhereUniqueWithoutComponentInput } from "../inputs/CssUpdateWithWhereUniqueWithoutComponentInput";
import { CssUpsertWithWhereUniqueWithoutComponentInput } from "../inputs/CssUpsertWithWhereUniqueWithoutComponentInput";
import { CssWhereUniqueInput } from "../inputs/CssWhereUniqueInput";
export declare class CssUpdateManyWithoutComponentNestedInput {
    create?: CssCreateWithoutComponentInput[] | undefined;
    connectOrCreate?: CssCreateOrConnectWithoutComponentInput[] | undefined;
    upsert?: CssUpsertWithWhereUniqueWithoutComponentInput[] | undefined;
    set?: CssWhereUniqueInput[] | undefined;
    disconnect?: CssWhereUniqueInput[] | undefined;
    delete?: CssWhereUniqueInput[] | undefined;
    connect?: CssWhereUniqueInput[] | undefined;
    update?: CssUpdateWithWhereUniqueWithoutComponentInput[] | undefined;
    updateMany?: CssUpdateManyWithWhereWithoutComponentInput[] | undefined;
    deleteMany?: CssScalarWhereInput[] | undefined;
}
