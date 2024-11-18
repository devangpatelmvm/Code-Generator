import { HtmlLinesAvgAggregate } from "../outputs/HtmlLinesAvgAggregate";
import { HtmlLinesCountAggregate } from "../outputs/HtmlLinesCountAggregate";
import { HtmlLinesMaxAggregate } from "../outputs/HtmlLinesMaxAggregate";
import { HtmlLinesMinAggregate } from "../outputs/HtmlLinesMinAggregate";
import { HtmlLinesSumAggregate } from "../outputs/HtmlLinesSumAggregate";
export declare class HtmlLinesGroupBy {
    id: number;
    line: string | null;
    componentId: number;
    _count: HtmlLinesCountAggregate | null;
    _avg: HtmlLinesAvgAggregate | null;
    _sum: HtmlLinesSumAggregate | null;
    _min: HtmlLinesMinAggregate | null;
    _max: HtmlLinesMaxAggregate | null;
}
