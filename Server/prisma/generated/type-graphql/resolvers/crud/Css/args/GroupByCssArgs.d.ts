import { CssOrderByWithAggregationInput } from "../../../inputs/CssOrderByWithAggregationInput";
import { CssScalarWhereWithAggregatesInput } from "../../../inputs/CssScalarWhereWithAggregatesInput";
import { CssWhereInput } from "../../../inputs/CssWhereInput";
export declare class GroupByCssArgs {
    where?: CssWhereInput | undefined;
    orderBy?: CssOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "content" | "componentId">;
    having?: CssScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
