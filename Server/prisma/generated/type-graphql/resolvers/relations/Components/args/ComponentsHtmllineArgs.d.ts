import { HtmlLinesOrderByWithRelationInput } from "../../../inputs/HtmlLinesOrderByWithRelationInput";
import { HtmlLinesWhereInput } from "../../../inputs/HtmlLinesWhereInput";
import { HtmlLinesWhereUniqueInput } from "../../../inputs/HtmlLinesWhereUniqueInput";
export declare class ComponentsHtmllineArgs {
    where?: HtmlLinesWhereInput | undefined;
    orderBy?: HtmlLinesOrderByWithRelationInput[] | undefined;
    cursor?: HtmlLinesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "line" | "componentId"> | undefined;
}
