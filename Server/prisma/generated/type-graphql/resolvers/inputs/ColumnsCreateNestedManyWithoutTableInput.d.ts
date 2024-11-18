import { ColumnsCreateOrConnectWithoutTableInput } from "../inputs/ColumnsCreateOrConnectWithoutTableInput";
import { ColumnsCreateWithoutTableInput } from "../inputs/ColumnsCreateWithoutTableInput";
import { ColumnsWhereUniqueInput } from "../inputs/ColumnsWhereUniqueInput";
export declare class ColumnsCreateNestedManyWithoutTableInput {
    create?: ColumnsCreateWithoutTableInput[] | undefined;
    connectOrCreate?: ColumnsCreateOrConnectWithoutTableInput[] | undefined;
    connect?: ColumnsWhereUniqueInput[] | undefined;
}
