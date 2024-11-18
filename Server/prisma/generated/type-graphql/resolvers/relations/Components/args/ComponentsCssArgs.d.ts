import { CssOrderByWithRelationInput } from "../../../inputs/CssOrderByWithRelationInput";
import { CssWhereInput } from "../../../inputs/CssWhereInput";
import { CssWhereUniqueInput } from "../../../inputs/CssWhereUniqueInput";
export declare class ComponentsCssArgs {
    where?: CssWhereInput | undefined;
    orderBy?: CssOrderByWithRelationInput[] | undefined;
    cursor?: CssWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "content" | "componentId"> | undefined;
}
