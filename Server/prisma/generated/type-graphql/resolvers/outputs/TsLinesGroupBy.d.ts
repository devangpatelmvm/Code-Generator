import { TsLinesAvgAggregate } from "../outputs/TsLinesAvgAggregate";
import { TsLinesCountAggregate } from "../outputs/TsLinesCountAggregate";
import { TsLinesMaxAggregate } from "../outputs/TsLinesMaxAggregate";
import { TsLinesMinAggregate } from "../outputs/TsLinesMinAggregate";
import { TsLinesSumAggregate } from "../outputs/TsLinesSumAggregate";
export declare class TsLinesGroupBy {
    id: number;
    line: string | null;
    componentId: number;
    _count: TsLinesCountAggregate | null;
    _avg: TsLinesAvgAggregate | null;
    _sum: TsLinesSumAggregate | null;
    _min: TsLinesMinAggregate | null;
    _max: TsLinesMaxAggregate | null;
}
