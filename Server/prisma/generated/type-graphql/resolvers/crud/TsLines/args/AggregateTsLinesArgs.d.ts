import { TsLinesOrderByWithRelationInput } from "../../../inputs/TsLinesOrderByWithRelationInput";
import { TsLinesWhereInput } from "../../../inputs/TsLinesWhereInput";
import { TsLinesWhereUniqueInput } from "../../../inputs/TsLinesWhereUniqueInput";
export declare class AggregateTsLinesArgs {
    where?: TsLinesWhereInput | undefined;
    orderBy?: TsLinesOrderByWithRelationInput[] | undefined;
    cursor?: TsLinesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
