import { TsLinesOrderByWithAggregationInput } from "../../../inputs/TsLinesOrderByWithAggregationInput";
import { TsLinesScalarWhereWithAggregatesInput } from "../../../inputs/TsLinesScalarWhereWithAggregatesInput";
import { TsLinesWhereInput } from "../../../inputs/TsLinesWhereInput";
export declare class GroupByTsLinesArgs {
    where?: TsLinesWhereInput | undefined;
    orderBy?: TsLinesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "line" | "componentId">;
    having?: TsLinesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
