import { CssCreateOrConnectWithoutComponentInput } from "../inputs/CssCreateOrConnectWithoutComponentInput";
import { CssCreateWithoutComponentInput } from "../inputs/CssCreateWithoutComponentInput";
import { CssWhereUniqueInput } from "../inputs/CssWhereUniqueInput";
export declare class CssCreateNestedManyWithoutComponentInput {
    create?: CssCreateWithoutComponentInput[] | undefined;
    connectOrCreate?: CssCreateOrConnectWithoutComponentInput[] | undefined;
    connect?: CssWhereUniqueInput[] | undefined;
}
